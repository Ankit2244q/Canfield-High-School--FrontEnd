import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import  {HttpClientModule}  from '@angular/common/http'
import { SchoolApiService } from './school-api.service';
import { LoginSignUpApiService } from 'src/Login/Signup-services/Log-Singup.Services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginComponent,
    LandingPageComponent ,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[
    UserLoginComponent
  ],
  providers: [SchoolApiService,LoginSignUpApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
