import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SostenibilidadComponent } from './sostenibilidad.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', component: SostenibilidadComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
    ],
  exports: [
    CommonModule
  ]
})
export class SostenibilidadRoutingModule { }