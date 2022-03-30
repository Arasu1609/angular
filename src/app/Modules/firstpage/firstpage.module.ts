import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstpageRoutingModule } from './firstpage-routing.module';
import { FirstpageComponent } from './firstpage.component';


@NgModule({
  declarations: [
    FirstpageComponent
  ],
  imports: [
    CommonModule,
    FirstpageRoutingModule
  ]
})
export class FirstpageModule { }
