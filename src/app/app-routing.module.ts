import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { ListStudentTeacherComponent } from './list-page/list-student-teacher/list-student-teacher.component';
import { UserLoginComponent } from './user-signup/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login-operation/login/login.component';

const routes: Routes = [
  {
    component:ListStudentTeacherComponent,
    path: "userlist"
  },
  {
    component:UserLoginComponent,
    path: "register"
  },
  {
    component:DashboardComponent,
    path:"dashborad"
  },
  {
   component:LoginComponent,
   path:"login"
  },
  {
    component:LandingPageComponent,
    path:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
