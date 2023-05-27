import { EnvService } from './env.service'; // import environment service

export const envServiceFactory = () => {
  const env: EnvService & Indexable = new EnvService(); // Create env Instance

  // Read environment variables from browser window
  const browserWindow: Window & typeof globalThis & Indexable = window || {};
  const browserWindowEnv = browserWindow['__env'] || {};

  // Assign environment variables from browser window to env
  // In the current implementation, properties from env.js overwrite defaults from the EnvService.
  // If needed, a deep merge can be performed here to merge properties instead of overwriting them.
  for (const key in browserWindowEnv) {
    if (browserWindowEnv.hasOwnProperty(key)) {
      env[key] = (<Indexable>window)['__env'][key];
    }
  }

  return env;
};

export const envServiceProvider = {
  provide: EnvService,
  useFactory: envServiceFactory,
  deps: [],
};

type Indexable = {
  [key: string]: any;
};
