import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidateRutRoutingModule } from './validate-rut-routing.module';
import { ValidateRutComponent } from './components/validate-rut/validate-rut.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ValidateRutComponent],
  imports: [
    CommonModule,
    ValidateRutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ValidateRutModule { }
