import { Injectable, OnInit } from '@angular/core';
import  {HttpClient, HttpClientModule, HttpParams ,HttpHeaders}  from '@angular/common/http'
import { LoginModel, AuthenticatedResponse } from 'src/Interface/login-model';
import { Router  } from '@angular/router';





@Injectable({
  providedIn: 'root'
})
export class LoginSignUpApiService implements OnInit  {

  invalidLogin: boolean = false;
  credentials: LoginModel = {username:'', password:''};

  url = 'https://localhost:44354'
 
  endPoints = {
    register:'/Register',
    login:"/login"
  }

  

  constructor(private httpclient:HttpClient, private router:Router) {
   
   }
  
 
   ngOnInit(): void {
     
   }


   saveUser(data:any) {
     debugger;
     const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const payload = {
      UserName:data.FirstName,
      LastName:data.LastName,
      Email:data.Email,
      Password:data.Password
    };
    return this.httpclient.post(this.url + this.endPoints.register , payload);
    //     return  new Promise((resolve , reject) =>{ this.httpclient.post(this.url+this.endPoints.register, 
    //       payload,
    //       httpOptions
    //     ).subscribe((res:any)=>{
    //       resolve(res)
    //     }, reject)
    // })
  }

  login(data:any){
  
    this.httpclient.post<AuthenticatedResponse>(this.url + this.endPoints.login, data, {
        headers: new HttpHeaders({ "Content-Type": "application/json"})
      }).subscribe({
        next: (response: AuthenticatedResponse) => {
          const token = response.token;
          localStorage.setItem("jwt", token); 
          this.invalidLogin = false; 
          this.router.navigate(["/userlist"]);
        }
        
        //error: (err: HttpErrorResponse) => this.invalidLogin = true
        
      })
  } 
  //   const endPoints="/Register"  
  
    
  //   return this.httpclient.post(this.url + endPoints,  
  //     {
  //       UserName: data.FirstName,
  //       LastName: data.LastName,
  //       Email:data.Email,
  //       Password: data.Password
  //     }
  //     ,httpOption).pipe(
  //     map((response:any) =>
  //     {
  //       console.log("response!!!!!!!!!!!!!!!!!!, ", response);
  //     }),
  //   )
    
  //   }
    
   }
  
  // signUp():Observable<any>{
  //     return this.httpclient.post(this.url);
  // }

   

