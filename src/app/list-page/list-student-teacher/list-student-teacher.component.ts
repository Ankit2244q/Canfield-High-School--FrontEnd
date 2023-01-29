import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { SchoolApiService } from 'src/app/school-api.service';
@Component({
  selector: 'app-list-student-teacher',
  templateUrl: './list-student-teacher.component.html',
  styleUrls: ['./list-student-teacher.component.css']
})
export class ListStudentTeacherComponent implements OnInit {

  studentList:any;
  staffList:any;
  listSelected:any;

  constructor(private _school:SchoolApiService) { 

    this.getStaff();

  }

  ngOnInit(): void {
   this.studentListOfSchool();
  }

getListOf(){
  this.listSelected =  document.querySelector("#select-option");
}

studentListOfSchool(){
  this._school.getDataStudent().subscribe(
    data => {
    console.log("heree",data);
    this.studentList = data;
  });
}

getStaff(){
  this._school.getDataStaff().subscribe(data => {
    console.log("staff ka data "  , data);
    this.staffList = data;
  });

  }
}


