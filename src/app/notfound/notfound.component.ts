import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute) { }

  message:string = ""
  ngOnInit(): void {
        this.activateRoute.data.subscribe((response:any)=>{
               console.log(response);
               this.message = response[0].ErroName;
        })
  }

}
