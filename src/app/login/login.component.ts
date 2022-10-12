import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  userName = '';
  Password = '';

  evtlogin() {

      localStorage.setItem('username' , this.userName);
      localStorage.setItem('password', this.Password);
     
      //wen ever u r trying to navigate to hre
      this.router.navigate(['schools']);
    
  }
}
