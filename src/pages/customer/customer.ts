import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
  profile: any;

  constructor(public navCtrl: NavController, public navParams: NavParams ) {
    this.profile = this.navParams.data;
   
      
    console.log('**nav params:', this.navParams);
   };
  }
