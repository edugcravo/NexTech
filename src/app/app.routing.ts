import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './componentes/home/home.component';
import { RouterModule, Routes } from '@angular/router';




export const APP_ROUTES: Routes = [
  { path:'', redirectTo:'/home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },

];



export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);/*Parametro é a constante declarada a cima */
