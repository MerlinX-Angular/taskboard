import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsComponent } from './teams/teams.component';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';
import { Project3Component } from './project3/project3.component';


const routes: Routes = [
  { path: '', component: TeamsComponent },
  { path: 'project1', component: Project1Component },
  { path: 'project2', component: Project2Component },
  { path: 'project3', component: Project3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule {

 }
