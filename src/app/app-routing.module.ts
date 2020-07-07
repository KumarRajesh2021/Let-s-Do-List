import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LetsDoComponent} from './components/lets-do/lets-do.component'
import { from } from 'rxjs';
import{AboutComponent} from './components/pages/about/about.component';
const routes: Routes = [
  {
    path:'',component:LetsDoComponent
  },
  {
    path:'about',component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
