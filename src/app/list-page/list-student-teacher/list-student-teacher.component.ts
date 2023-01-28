import { Component, OnInit } from '@angular/core';
import { SchoolApiService } from 'src/app/school-api.service';
@Component({
  selector: 'app-list-student-teacher',
  templateUrl: './list-student-teacher.component.html',
  styleUrls: ['./list-student-teacher.component.css']
})
export class ListStudentTeacherComponent implements OnInit {

  studentList:any;
  constructor(private _school:SchoolApiService) { }

  ngOnInit(): void {
   this.studentListOfSchool();
  }

studentListOfSchool(){
  this._school.getDataStudent().subscribe(
    data => {
    console.log("heree",data);
    this.studentList = data;
  });
}

}
