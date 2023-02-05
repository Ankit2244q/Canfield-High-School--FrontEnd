import { Injectable } from '@angular/core';
import  {HttpClient, HttpClientModule, HttpParams}  from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolApiService {
   url = "https://localhost:44354/Students";
   staffurl = "https://localhost:44354/Staff";
  constructor( private httpclient:HttpClient) {
  
   } 
   getDataStudent(): Observable<any>{
     return this.httpclient.get(this.url);
   }
   getDataStudentById():Observable<any>{
    let paramId = new HttpParams().set('id', "1");
   return this.httpclient.get(this.url, {params:paramId})
   }

   getDataStaff():Observable<any>{
     return this.httpclient.get(this.staffurl)
   }

   
}
