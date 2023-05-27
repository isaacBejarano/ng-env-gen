import { Component } from '@angular/core';

import { EnvService } from './env.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  template: ` <h1>Deploy Mode: {{ deployMode }}</h1> `,
  standalone: true,
  imports: [CommonModule],
})
export class AppComponent {
  deployMode: string;

  constructor(protected _envSrv: EnvService) {
    this.deployMode = _envSrv.envConfig.deployMode;
  }
}
