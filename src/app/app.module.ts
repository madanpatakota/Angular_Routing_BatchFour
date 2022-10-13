import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { SchoolsComponent } from './schools/schools.component';
import { SchoolDetailsComponent } from './schools/school-details/school-details.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CanActivateGuard } from './can-activate.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { CanDeactivateSchoolGuard } from './can-deactivate-school.guard';
import { CanActivateChildSchoolGuard } from './can-activate-child-school.guard';

// const routes : Routes =
// {home path ---> home component}         -- Route
// {customes path --> customes component}  -- Route
// {produts path --> products comopnent}   -- Route

// const appRoutes: Routes = [
//   {
//     path: 'main',   //http://localhost:4200/main
//     component: MainComponent,
//   },
//   {
//     path: 'customers',  //http://localhost:4200/customers
//     component: CustomersComponent,
//   },
//   ////http://localhost:4200/customerdetails
//   { path: 'customerdetails', component: CustomerDetailsComponent },

//   { path: '', component: MainComponent },

// ];

// 0.  I need to make a relationship b/w the schooldetails and school in appmodule.
// 1 . schooldetails is child and schools is the parent
// 2 . i am saying the bottom of the schools component
//    ( i need to prepare the one router outlet)

// ng g g <____________>

// Q) i want to configure the LoginComponent when their is no Route(home page)

//localhost:4200/adfalsdfnadfa
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'schools',
    component: SchoolsComponent,
    canActivate: [CanActivateGuard],
    canDeactivate: [CanDeactivateSchoolGuard],
    canActivateChild : [CanActivateChildSchoolGuard],
    children: [
      { 
        path: 'schooldetails', component: SchoolDetailsComponent 
      }
    ],
  },
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

// {
//   path : 'schooldetails' , component : SchoolDetailsComponent
// }

// path : route/:param

@NgModule({
  declarations: [
    AppComponent,
    SchoolsComponent,
    SchoolDetailsComponent,
    LoginComponent,
    NotfoundComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
