import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component'

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: '/login'},
  { path:'register', component: RegisterComponent },
  { path:'login',component: LoginComponent },
  { path:'home', component: HomeComponent },
  {path:"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
