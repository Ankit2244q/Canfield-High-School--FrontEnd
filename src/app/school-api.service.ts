import { Injectable } from '@angular/core';
import  {HttpClient, HttpClientModule, HttpParams}  from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolApiService {

   url = "https://localhost:7166/Students";
  

  constructor( private httpclient:HttpClient) {
   
   }

  
   getDataStudent(): Observable<any>{
     return this.httpclient.get(this.url);
   }

   getDataStudentById():Observable<any>{
    let paramId = new HttpParams().set('id', "9");
   return this.httpclient.get(this.url, {params:paramId})
   }

   
}
