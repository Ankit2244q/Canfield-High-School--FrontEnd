import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserLoginComponent } from './user-signup/user-login.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import  {HttpClientModule}  from '@angular/common/http'
import { SchoolApiService } from './school-api.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignUpApiService } from 'src/Login/Signup-services/Log-Singup.Services';
import { ListStudentTeacherComponent } from './list-page/list-student-teacher/list-student-teacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login-operation/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';


// const appRoute:Routes = [
//   {
//     path:"student" , component: ListStudentTeacherComponent,
//   },
//   {
//     path:'',  component: LandingPageComponent,
//   },
// ]

export function getJwtToken(){
  return localStorage.getItem("jwt");
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginComponent,
    LandingPageComponent,
    ListStudentTeacherComponent,
    DashboardComponent,
    LoginComponent ,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getJwtToken,
        allowedDomains: ["localhost:4200"],
        disallowedRoutes: []
      }
    })

    // RouterModule.forRoot(appRoute)
  ],
  exports:[
    UserLoginComponent
  ],
  providers: [SchoolApiService,LoginSignUpApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
