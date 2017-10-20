import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AddCustomerPage } from '../add-customer/add-customer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {}
  goToAddCustomer(){
    this.navCtrl.push(AddCustomerPage);
  
  }
  

}
