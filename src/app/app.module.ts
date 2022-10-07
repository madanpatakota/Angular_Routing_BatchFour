import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

// const routes : Routes =
// {home path ---> home component}         -- Route
// {customes path --> customes component}  -- Route
// {produts path --> products comopnent}   -- Route

const appRoutes: Routes = [
  {
    path: 'main',   //http://localhost:4200/main
    component: MainComponent,
  },
  {
    path: 'customers',  //http://localhost:4200/customers
    component: CustomersComponent,
  },
  ////http://localhost:4200/customerdetails
  { path: 'customerdetails', component: CustomerDetailsComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
