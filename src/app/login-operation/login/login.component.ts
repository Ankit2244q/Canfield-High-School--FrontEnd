import { Component, OnInit } from '@angular/core';
import { LoginSignUpApiService } from 'src/Login/Signup-services/Log-Singup.Services'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _httprequest:HttpClient ,private _login:LoginSignUpApiService) { }

submitlogin(data:any){
  console.log("works")    
 this._login.login(data);
  }
  

  ngOnInit(): void {
  }

}
