import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from 'src/app/school.service';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css'],
})
export class SchoolDetailsComponent implements OnInit {
  constructor(
    private schoolService: SchoolService,
    private activateRoute: ActivatedRoute
  ) {}

  //Actiavate route //http://localhost:4200/schooldetails/

  // params //DelhiPublicSchool
  // for fetching the parameter
  // you need to get the what is the activateRouter
  // you need to get the params
  // subscription....

  schoolDetails: any = {};

  // Q) how you are going to get the routerparms into your componennt?
  //filter

  ngOnInit(): void {
    //  this.activateRoute.params.subscribe((params:any)=>{
    //      console.log("current schoolName is " , params);
    //      let data = this.schoolService.
    //      schoolsDetails.filter(record=>record.SchoolID == params.ID);
    //      this.schoolDetails = data[0];
    //  })

    // this.activateRoute.queryParams.subscribe((queryParams: any) => {
    //   console.log('current schoolName is ', queryParams);
    //   //current schoolName is  {SID: 'School-2'}
    //   let data = this.schoolService.schoolsDetails.filter(
    //     (record) => record.SchoolID == queryParams.SID
    //   );
    //   this.schoolDetails = data[0];
    // });

    this.activateRoute.fragment.subscribe((fragmentParam: any) => {
      console.log('current schoolName is ', fragmentParam);
      //current schoolName is  School-3
      let data = this.schoolService.schoolsDetails.filter(
        (record) => record.SchoolID == fragmentParam
      );
      this.schoolDetails = data[0];
    });
  }
}
