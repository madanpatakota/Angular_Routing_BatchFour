import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  constructor(private schoolService :SchoolService) { }

  schoolsList : any = [];
  ngOnInit(): void {
      this.schoolsList = this.schoolService.schoolsList;
  }

}
