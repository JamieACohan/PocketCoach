import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { User } from '../../Models/user';
import { HttpClient } from '@angular/common/http';


declare var Stripe: any;
@IonicPage()
@Component({
  selector: 'page-renew-payment',
  templateUrl: 'renew-payment.html',
})
export class RenewPaymentPage {

  user = {} as User;
  users: any[] = [];
  card: any;
  price: number;
  newExpiryDate: string;
  duration: number;
  hasPaid: boolean;

  private token: string = '';
  private ngForm: any = {
    cc: "",
    cvc: "",
    month: "",
    year: "",
    amount: ""
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public fireStore: AngularFirestore,
    public http: HttpClient, private view: ViewController) {

    this.hasPaid = false;
    

    Stripe.setPublishableKey('pk_test_r48revO6ivJFIShuQpqCoNxM00fFFQA1qP');

    this.newExpiryDate = this.navParams.get('newExpiryDate');
    this.price = this.navParams.get('Price');
    this.duration = this.navParams.get('Duration');



  }



  onSubmit() {
    console.log(this.ngForm);
    Stripe.card.createToken({
      number: this.ngForm.cc, //'4242424242424242',
      cvc: this.ngForm.cvc, //'220',
      exp_month: this.ngForm.month, //12,
      exp_year: this.ngForm.year//2020,

    }, (status, response) =>
        this.stripeResponseHandler(status, response));
  }
  stripeResponseHandler(status, response) {
    if (response.error) {
      // Show the errors on the form
      console.log('error');
      console.log(response.error.message);
    } else {
      // response contains id and card, which contains
      //additional card details
      this.token = response.id;
      // Insert the token into the form so it gets
      //submitted to the server
      console.log('success');
      console.log('Sending token param:');
      console.log(this.token);

  
      this.storage.get('userDocID').then((docID) => {

  
        firebase.firestore().collection("users").doc(docID).update({
  
          expiryDate: this.newExpiryDate
  
  
        }).then((doc) => {
          console.log(doc)
  
        }).catch((err) => {
          console.log(err)
        })
      });

      this.hasPaid = true;
      
    }
  }

  closeModal()
  {
    this.view.dismiss();
  }

}
