import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   sac = ['Afghanistan', 'Bangladesh', 'Bhutan', 'India', 'Maldives', 'Nepal', 'Pakistan','Sri Lanka']
   states = [ 'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh',
              'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalay','Mizoram','Nagaland',
              'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh',
              'West Bengal']
   cities = ['Amaravati','Itanagar','Dispur','Patna','Raipur','Panaji','Gandhinagar','Chandigarh','Shimla','Ranchi','Bengaluru',
             'Thiruvananthapuram','Imphal','Shillong','Aizawl','Kohima','Bhubaneswar','Chandigarh','Jaipur','Gangtok','Chennai',
             'Hyderabad','Agartala','Lucknow','Dehradun','Kolkata'];
   ut = ['Andaman and Nicobar Islands','Chandigarh','Daman and Diu and Dadra and Nagar Haveli','Delhi','Jammu and Kashmir','Ladakh',
         'Lakshadweep','Puducherry','Bhopal','Mumbai'];


  constructor() { }
  getStates(){
    return this.states;
    
    
  }
  getCities(){
    return this.cities;

  }
  getUts(){
    return this.ut;
    
  }
  getSac(){
    return this.sac;
  }
}
