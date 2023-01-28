import { Injectable } from '@angular/core';
import  {HttpClient, HttpClientModule, HttpParams}  from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginSignUpApiService {


  

  constructor(private httpclient:HttpClient) {
  
   }
  
   saveUser(data:any):Observable<any>{
    // let paramId = new HttpParams().set('id', "0");
    let url = `https://localhost:44354/Register?=${data.id}`
    return this.httpclient.post(url,JSON.stringify(data));
   }
  
  // signUp():Observable<any>{
  //     return this.httpclient.post(this.url);
  // }

   
}
