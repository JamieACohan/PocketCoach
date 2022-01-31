import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-view-trainer',
  templateUrl: 'view-trainer.html',
})
export class ViewTrainerPage {

  trainerData: any;
  users: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    const data = this.navParams.get('trainer');
    this.trainerData = data;
    this.getUserData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewTrainerPage');
  }

getUserData(){
  firebase.firestore().collection("users")
    .where("UID", "==", firebase.auth().currentUser.uid)
    .get()
    .then((docs) => {

      docs.forEach((doc) => {
        this.users.push(doc);
      })
      

    }).catch((err) => {
      console.log(err)
    })


    
  }

  hasPaid()
  {
    var hasPaid = false;
    for(let user of this.users)
    {
      hasPaid = user.data().hasPaid;
    }
    return hasPaid;
  }

  toPayment()
  {
    this.navCtrl.push(PaymentPage, {trainerData: this.trainerData});
  }

}
