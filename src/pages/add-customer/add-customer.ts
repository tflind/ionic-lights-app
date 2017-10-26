import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-add-customer',
  templateUrl: 'add-customer.html',
})
export class AddCustomerPage {
  public myPerson = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  createPerson(firstName: string, lastName: string, address: string, phone: number, email: string ): void {
    console.log(firstName, lastName, address, phone, email);
    const personRef: firebase.database.Reference = firebase.database().ref(`/customers/`);
    personRef.update({ 
      [Date.now()]: {
        firstName, 
        lastName,
        address,
        phone,
        email
      }  
    })
    this.navCtrl.popToRoot();
    
    }
    
  ionViewDidLoad() {
    const personRef: firebase.database.Reference = firebase.database().ref(`/person1/`);
    personRef.on('value', personSnapshot => {
    console.log(this.myPerson);
    this.myPerson = personSnapshot.val();
    }); 
    console.log('ionViewDidLoad AddCustomerPage');
  }

}
 