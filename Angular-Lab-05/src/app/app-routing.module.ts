import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { authenticationGuard } from './authentication.guard';
import { EmplyeeDetailsComponent } from './emplyee-details/emplyee-details.component';


const routes: Routes = [
  {path: "" , redirectTo: "home" , pathMatch:"full"},
  {path: "login" , component:LoginComponent},
  {path: "home" , component:HomeComponent , canActivate: [authenticationGuard ]},
  {path: "employees" , component:EmployeesComponent , canActivate: [authenticationGuard]},
  {path: "employeedetails/:id" , component:EmplyeeDetailsComponent , canActivate: [authenticationGuard]},
  {path: "accounts" , component:AccountsComponent , canActivate: [authenticationGuard]},
  {path: "**" , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
