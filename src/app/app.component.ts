import { Component } from '@angular/core';
import { EnvService } from './services/env.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  deployMode: string;

  constructor(protected _envSrv: EnvService) {
    this.deployMode = _envSrv.envConfig.deployMode;
  }
}
