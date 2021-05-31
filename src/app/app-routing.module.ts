import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DetailsComponent} from "./details/details.component";
import { ListComponent } from "./list/list.component";
import { CreateComponent } from './create/create.component';
import {LoginGuard} from "./login.guard";

const routes: Routes = [
 /* {path:'login', component:LoginComponent},
  {path:'details', component:DetailsComponent, canActivate: [LoginGuard]},
  {path:'list', component:ListComponent, canActivate: [LoginGuard]},
  {path:'list', component:CreateComponent, canActivate: [LoginGuard]}  */


  {path:'login', component:LoginComponent},
  {path:'details', component:DetailsComponent},
  {path:'list', component:ListComponent},
  {path:'list', component:CreateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
