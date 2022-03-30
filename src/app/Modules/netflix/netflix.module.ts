import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetflixRoutingModule } from './netflix-routing.module';
import { NetflixComponent } from './netflix.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';


@NgModule({
  declarations: [
    NetflixComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    NetflixRoutingModule
  ]
})
export class NetflixModule { }
