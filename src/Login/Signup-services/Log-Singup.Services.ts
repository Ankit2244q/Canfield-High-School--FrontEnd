import { Injectable } from '@angular/core';
import  {HttpClient, HttpClientModule, HttpParams ,HttpHeaders}  from '@angular/common/http'
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginSignUpApiService {
  url = 'https://localhost:44354/Register'
  endPoints ="/Register" 

  

  constructor(private httpclient:HttpClient) {
   
   }
  
  //  saveContactDetails() {
  //   this.ngxLoader.start();
  //   let user: any = {}
  //   user.firstName = this.contactForm.value.firstName
  //   user.lastName = this.contactForm.value.lastName
  //   user.company = this.contactForm.value.company
  //   user.dateOfBirth = this.contactForm.value.dateOfBirth
  //   user.company = this.contactForm.value.company
  //   user.email = this.contactForm.value.email
  //   user.gender = this.contactForm.value.gender
  //   user.title = this.contactForm.value.title
  //   user.phone = this.contactForm.value.phone
  //   user.contactId = this.selectedConact.contactId
  //   user.updatedBy = this.userId
  //   user.phoneNumber = this.contactForm.value.phoneNumber
  //   user.groupId = this.contactGroup.value.group

  //   if (this.isEdit) {
  //     this.selectedConact.groupId > 0
  //   }
  //   this.contactService.saveContacts(user)
  //     .then(res => {
  //       this.ngxLoader.stop();
  //       this.toastr.success(ResponseMessage.ContactSaved, MessageType.Success, { timeOut: 3000 })
  //     }).catch(err => {
  //       this.ngxLoader.stop();
  //       this.toastr.error(ResponseMessage.Failed, MessageType.Error, { timeOut: 3000 })
  //     })
  // }

  // saveContacts(data: any): Promise<any> {
  //   let method = apiEndpoints.addContact;
  //   return new Promise((resolve, reject) => {
  //     this._httpClient.post(method, data)
  //       .subscribe((res: any) => {
  //         resolve(res)
  //       }, reject)
  //   })
  // }


   saveUser(data:any):Promise<any>{
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
        return  new Promise((resolve , reject) =>{ this.httpclient.post(this.url, 
          payload,
          httpOptions
        ).subscribe((res:any)=>{
          resolve(res)
        }, reject)
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

   

