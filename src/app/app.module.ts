import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { SchoolsComponent } from './schools/schools.component';
import { SchoolDetailsComponent } from './schools/school-details/school-details.component';

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


const appRoutes = [
  {
    path : 'schools' , component : SchoolsComponent,
  },
  {
    path : 'schooldetails/:Name' , component : SchoolDetailsComponent
  }
]

@NgModule({
  declarations: [AppComponent, SchoolsComponent, SchoolDetailsComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
