import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginSignUpApiService } from 'src/Login/Signup-services/Log-Singup.Services';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private _loginService:LoginSignUpApiService) { }

  ngOnInit(): void {
  }

  submitResgistration(data:any){
    console.log("------------------------------",data.FirstName)
     let registrationData = {
      UserName:data.FirstName,
      LastName:data.LastName,
      Email:data.Email,
      Password:data.password,

     }  

  //   return this._loginService.saveUser(registrationData).then(data => {
      
  //      console.log("here is the datata to show" , data);
  //    })
  // }

  

    }
}
