import { Component } from '@angular/core';
import { SchoolApiService } from './school-api.service';

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
      console.table("check",data);
      this.test = data;
        }
  );

  this._schooldata.getDataStudentById().subscribe(
    data => {
      console.table("check one  student", data);

    }
  )

  }
  ngOnInIt(){
 
  }

}

