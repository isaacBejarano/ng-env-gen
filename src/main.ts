import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { EnvService } from './app/env.service';

const envServiceFactory = () => {
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

type Indexable = {
  [key: string]: any;
};

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: EnvService,
      useFactory: envServiceFactory,
      deps: [],
    },
  ],
});
