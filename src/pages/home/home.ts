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
  public secondProfileList:Array<any>;

  constructor(public navCtrl: NavController) {
    this.profileRef = firebase.database().ref('/customers');

    this.profileRef.on('value', profileList => {
      let customers = [];
      profileList.forEach( profile => {
        customers.push(profile.val());
        return false;
      })
      this.profileList = customers;
      this.secondProfileList = customers;
      console.log(this.profileList);
    })
  }

  initializeItems(){
    this.profileList = this.secondProfileList;
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

     // set q to the value of the searchbar
    var q = searchbar.srcElement.value;

     // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }

     this.profileList = this.profileList.filter((v) => {
      if(v.firstName && q) {
        if (v.firstName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  goToAddCustomer(){
    this.navCtrl.push(AddCustomerPage);
  }

   ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }

}
