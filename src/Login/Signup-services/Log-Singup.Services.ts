import { Injectable } from '@angular/core';
import  {HttpClient, HttpClientModule, HttpParams}  from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSignUpApiService {

   url = "  'https://localhost:7166/Resgister'";
  

  constructor(private httpclient:HttpClient) {
   
   }

  
  signUp():Observable<any>{
      return this.httpclient.post(this.url,singupdata);
  }

   
}
