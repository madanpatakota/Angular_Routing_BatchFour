import { Component, NgModule } from '@angular/core';
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
import { ShoolResolverResolver } from './shool-resolver.resolver';

// const routes : Routes =
// {home path ---> home component}         -- Route
// {customes path --> customes component}  -- Route
// {produts path --> products comopnent}   -- Route

const appRoutes2: Routes = [
  {
    path: 'main', //http://localhost:4200/main
    component: MainComponent,
  },
  {
    path: 'customers', //http://localhost:4200/customers
    component: CustomersComponent,
  },
  ////http://localhost:4200/customerdetails
  { path: 'customerdetails', component: CustomerDetailsComponent },

  { path: '', component: MainComponent },
];

// 0.  I need to make a relationship b/w the schooldetails and school in appmodule.
// 1 . schooldetails is child and schools is the parent
// 2 . i am saying the bottom of the schools component
//    ( i need to prepare the one router outlet)

// ng g g <____________>

// Q) i want to configure the LoginComponent when their is no Route(home page)

//localhost:4200/adfalsdfnadfa

// you want to pass the information
// from service to the Component
// via route then we use the resolve
const appRoutes1: Routes = [
  {
    path: 'main', //http://localhost:4200/main
    component: MainComponent,
  },
  {
    path: 'customers', //http://localhost:4200/customers
    component: CustomersComponent,
  },
  ////http://localhost:4200/customerdetails
  { path: 'customerdetails', component: CustomerDetailsComponent },

  { path: '', component: MainComponent },
  // { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'schools',
    component: SchoolsComponent,
    resolve: [ShoolResolverResolver], // who ever subscribe this route for the data....
    canActivate: [CanActivateGuard],
    canDeactivate: [CanDeactivateSchoolGuard],
    canActivateChild: [CanActivateChildSchoolGuard],
    children: [
      {
        path: 'schooldetails',
        component: SchoolDetailsComponent,
      },
    ],
  },
  {
    path: 'not-found',
    data: [{ ErroName: 'Bad Request' }],

    component: NotfoundComponent,
  },
  // wild charcters
  { path: '**', redirectTo: 'not-found' },
];

// data which handles the some static data or small information
// Roles applicaiton

// resolve is for maintain the
// data and resolve

// {
//   path : 'schooldetails' , component : SchoolDetailsComponent
// }

// path : route/:param

const appRoutes: Routes = [
  {
    path: 'main', //http://localhost:4200/main
    component: MainComponent,
  },
  {
    path: 'customers', //http://localhost:4200/customers
    component: CustomersComponent,
  },
  ////http://localhost:4200/customerdetails
  { path: 'customerdetails', component: CustomerDetailsComponent },

  { path: '', component: MainComponent },
  // { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'schools',
    component: SchoolsComponent,
  },
  {
    path: 'schooldetails',
    component: SchoolDetailsComponent,
  },
  {
    path: 'not-found',
    data: [{ ErroName: 'Bad Request' }],

    component: NotfoundComponent,
  },
  // wild charcters
  { path: '**', redirectTo: 'not-found' },
];

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
