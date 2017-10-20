import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AddCustomerPage } from '../add-customer/add-customer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    addCustomerPage = AddCustomerPage;
  constructor(public navCtrl: NavController) {
    
  }

}
