import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: "",
    redirectTo: "validate-rut",
    pathMatch: "full"
  },
  {
    path: 'validate-rut',
    loadChildren: () => import('./modules/validate-rut/validate-rut.module').then(m => m.ValidateRutModule)
  },
  {
    path: '**',
    redirectTo: "validate-rut"
  }
];
