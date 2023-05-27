import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { envServiceProvider } from './services/env.provider';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [envServiceProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
