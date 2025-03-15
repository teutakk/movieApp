import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieComponent } from './movie/movie.component';


const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', 
    component: DashboardComponent,
    children:[
      { path: '', redirectTo: 'movie', pathMatch: 'full' },
      {path:'movie',component:MovieComponent},
     {path:'moviedetails/:id', component:MovieDetailsComponent} 
    ]
},
  {path:'login', component:LoginComponent},
  {path:'**',component:NotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
