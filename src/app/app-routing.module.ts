import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NameeditorComponent } from './nameeditor/nameeditor.component';
import { ProfileeditorComponent } from './profileeditor/profileeditor.component';
import { HerotemplateComponent } from './herotemplate/herotemplate.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'
  },
  {
    path:'heroes',
    component:HeroesComponent
 },
 {
   path:'dashboard',
   component:DashboardComponent
 },
 {
   path:'detail/:id',
   component:HeroDetailComponent
 },
 {
   path:'nameeditor',
   component:NameeditorComponent
 },
 {
   path:'profileeditor',
   component:ProfileeditorComponent
 },
 {
   path:'herotemplate',
   component:HerotemplateComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
