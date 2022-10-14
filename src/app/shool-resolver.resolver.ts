import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';


import { Observable, of } from 'rxjs';
import { SchoolService } from './school.service';

@Injectable({
  providedIn: 'root'
})


// you want to pass the information
// from service to the Component
// via route then we use the resolve
export class ShoolResolverResolver 
      implements Resolve<any> {
  
  constructor(private schoolService : SchoolService){

  }

  
  resolve(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): any {
    let output = [];
    output.push("Hello world");
    output.push("dummy valus");
    output.push(this.schoolService.schoolsList);
    return output;
  }
}
