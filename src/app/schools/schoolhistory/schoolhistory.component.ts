import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from 'src/app/school.service';

@Component({
  selector: 'app-schoolhistory',
  templateUrl: './schoolhistory.component.html',
  styleUrls: ['./schoolhistory.component.css']
})
export class SchoolhistoryComponent implements OnInit {

  constructor(
    private schoolService: SchoolService,
    private activateRoute: ActivatedRoute
  ) {}

  school:any;
  ngOnInit(): void {
      this.activateRoute.params.subscribe((params:any)=>{
         console.log("current schoolName is " , params);
         let data = this.schoolService.
         schoolsDetails.filter(record=>record.SchoolID == params.schoolID);
         this.school = data[0];
     })
  }

}
