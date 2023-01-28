import { Component } from '@angular/core';
import { SchoolApiService } from './school-api.service';
import { LoginSignUpApiService } from 'src/Login/Signup-services/Log-Singup.Services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Canfield-High-School';
  test:any;

  constructor( private _schooldata:SchoolApiService){
    this._schooldata.getDataStudent().subscribe(
      data => {
      console.log("check",data);
      this.test = data;
        }
  );

  this._schooldata.getDataStudentById().subscribe(
    data => {
      console.log("check one student", data);

    }
  )

  }
  ngOnInIt(){
 
  }

}

