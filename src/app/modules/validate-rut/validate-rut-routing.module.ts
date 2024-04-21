import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateRutComponent } from './components/validate-rut/validate-rut.component';

const routes: Routes = [{
  path: "",
  component: ValidateRutComponent,
  pathMatch: 'prefix'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidateRutRoutingModule { }
