import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { TranslocoRootModule } from './transloco-root.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [CoreComponent],
  imports: [BrowserModule, CoreRoutingModule, TranslocoRootModule],
  bootstrap: [CoreComponent],
})
export class CoreModule {}
