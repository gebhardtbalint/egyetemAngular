import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UpdateComponent} from "./update/update.component";
import { ListComponent } from "./list/list.component";
import { CreateComponent } from './create/create.component';
import {LoginGuard} from "./login.guard";
import {LogoutGuard} from "./logout.guard";

const routes: Routes = [
 /* {path:'login', component:LoginComponent},
  {path:'details', component:DetailsComponent, canActivate: [LoginGuard]},
  {path:'list', component:ListComponent, canActivate: [LoginGuard]},
  {path:'list', component:CreateComponent, canActivate: [LoginGuard]}  */


  {path:'login', component:LoginComponent, canActivate: [LogoutGuard]},
  {path:'update', component:UpdateComponent, canActivate: [LoginGuard]},
  {path:'list', component:ListComponent, canActivate: [LoginGuard]},
  {path:'create', component:CreateComponent, canActivate: [LoginGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
