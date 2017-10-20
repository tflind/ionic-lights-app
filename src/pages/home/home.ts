import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AddCustomerPage } from '../add-customer/add-customer';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public profileList:Array<any>;
  public profileRef:firebase.database.Reference;

  constructor(public navCtrl: NavController) {
    this.profileRef = firebase.database().ref('/person1');

    this.profileRef.on('value', profileList => {
      let profiles = [];
      profileList.forEach( profile => {
        profiles.push(profile.val());
        return false;
      })
      this.profileList = profiles;
      console.log(this.profileList);
    })
  }
  goToAddCustomer(){
    this.navCtrl.push(AddCustomerPage);
  
  }
   ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }
  

}
