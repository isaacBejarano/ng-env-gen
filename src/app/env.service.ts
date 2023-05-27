import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvService {
  envConfig!: EnvConfig;
  constructor() {}
}

export type EnvConfig = {
  deployMode: 'LOCALHOST' | 'DEV' | 'TEST' | 'UAT' | 'PROD';
  host: string;
  API: string;
};
