import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { CommonModule } from '@angular/common';
import { RestaComponent } from './resta/resta.component';
import { MultiplicacionComponent } from './multiplicacion/multiplicacion.component';
import { DivisionComponent } from './division/division.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full' },
  {path:'home', component: HomeComponent},
  {path: 'add', component: AddComponent},
  {path: 'resta', component: RestaComponent},
  {path: 'multiplicacion', component: MultiplicacionComponent},
  {path: 'division', component: DivisionComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
