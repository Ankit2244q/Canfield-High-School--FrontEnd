import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
     console.table("here",data);
     this._loginService.saveUser(data).subscribe((response)=>{
       console.log(response);
     });
  }

}
