import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  constructor(private schoolService :SchoolService , private router:Router , 
    private activeRouter : ActivatedRoute) { }

  schoolsList : any = [];
  ngOnInit(): void {
      this.schoolsList = this.schoolService.schoolsList;
      

      this.activeRouter.data.subscribe((reponse)=>{
           console.log("*********",reponse);
      })


 
    }

  evtNavigation(ID:string){
    //First approach
    // this.router.navigate(["/schooldetails",ID]);
     //Second approach
     //this.router.navigate(["/schooldetails"], { queryParams : { SID : ID}});
     console.log(this.activeRouter);
    //  this.router.navigate(["/schooldetails"], { fragment : ID , relativeTo  : this.activeRouter});
     this.router.navigate(["/schooldetails"], { fragment : ID , relativeTo  : this.activeRouter});
    //  http://localhost:4200/schools/schooldetails#School-3
    //http://localhost:4200/schools  --- more
    //http://localhost:4200/schooldetails#School-3

  }

  evtUpdateUserEmail(){
    localStorage.setItem('username','enduser@gmail.com');
  }

  evtUpdateUserEmailtoAdmin(){
    localStorage.setItem('username','admin@gmail.com');  
  }





}
