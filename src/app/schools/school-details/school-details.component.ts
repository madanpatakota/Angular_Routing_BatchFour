import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from 'src/app/school.service';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css']
})
export class SchoolDetailsComponent implements OnInit {

  constructor(private schoolService : SchoolService,
              private activateRoute : ActivatedRoute) { }
  
  //Actiavate route //http://localhost:4200/schooldetails/

 // params //DelhiPublicSchool
  // for fetching the parameter
  // you need to get the what is the activateRouter
  // you need to get the params 
  // subscription....

  schoolDetails = {};
  ngOnInit(): void {
     this.activateRoute.params.subscribe((x)=>{
      console.log("current schoolName is " , x);
     })
  }

}
