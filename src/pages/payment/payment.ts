import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { TrainerhubPage } from '../trainerhub/trainerhub';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { User } from '../../Models/user';
import { HttpClient } from '@angular/common/http';
import { TrainersPage } from '../trainers/trainers';


declare var Stripe: any;
@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  user = {} as User;
  users: any[] = [];
  card: any;
  trainerData: any;
  trainer: any;
  hasPaid: boolean;


  private token: string = '';
  private ngForm: any = {
    cc: "4242424242424242",
    cvc: "220",
    month: "12",
    year: "2022",
    amount: ""
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public fireStore: AngularFirestore,
    public http: HttpClient, private toastCtrl: ToastController) {
    this.getUserData();

    this.hasPaid = false;

    Stripe.setPublishableKey('pk_test_r48revO6ivJFIShuQpqCoNxM00fFFQA1qP');

    const data = this.navParams.get('trainerData');
    this.trainerData = data;
    // this.hasPaid = this.navParams.get('Paid');


    this.trainer = this.fireStore.doc<any>(`/users/` + data.UID).valueChanges().subscribe((profile) => {
      this.user.clientCount = profile.clientCount;
      this.user.maxClients = profile.maxClients;
      this.user.price = profile.price;
      this.user.duration = profile.duration;
      this.user.isAvailable = profile.isAvailable;
      if(profile.isAvailable == false && this.hasPaid == false)
      {
        // this.navCtrl.setRoot(TrainersPage);
        let toast = this.toastCtrl.create({
          message: "Trainer has become unavailable."
        });
    
        toast.present();
        setTimeout(() => {
          toast.dismiss();
        }, 5000);
      }
    });

    this.fireStore.doc<any>(`/users/` + firebase.auth().currentUser.uid).valueChanges().subscribe((profile) => {
      this.user.hasPaid = profile.hasPaid;
    });

  }

  addDays(date: Date, days: number) {
    date.setDate(date.getDate() + days);


    return date.toDateString().split(' ').slice(1, 4).join(' ');
  }

  async getUserData() {
    await firebase.firestore().collection("users")
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

  onSubmit() {
    console.log(this.ngForm);
    Stripe.card.createToken({
      number: this.ngForm.cc, //'4242424242424242',
      cvc: this.ngForm.cvc, //'220',
      exp_month: this.ngForm.month, //12,
      exp_year: this.ngForm.year//2022,

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



      // Updating Client info to give access to trainerHub
      // Add trainer realtionship to user
      var today = new Date();
      firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid)
        .update({

          hasPaid: true,
          trainerName: this.trainerData.firstName + " " + this.trainerData.surname,
          trainerID: this.trainerData.UID,
          expiryDate: this.addDays(today, this.user.duration)


        }).then((doc) => {
          console.log(doc)
        }).catch((err) => {
          console.log(err)
        })





      for (let user of this.users) {

        var image;
        if (user.data().image) {
          image = user.data().image;
        }
        else {
          image = "";
        }
        // Add Client to Trainer List
        firebase.firestore().collection("users").doc(this.trainerData.UID).collection('clientList').doc(firebase.auth().currentUser.uid).set({
          clientUID: firebase.auth().currentUser.uid,
          clientEmail: firebase.auth().currentUser.email,
          clientName: user.data().firstName + " " + user.data().surname,
          firstName: user.data().firstName,
          surname: user.data().surname,
          image: image,
          age: user.data().age,
          country: user.data().country,
          city: user.data().city,
          sex: user.data().firstName,
          expiryDate: this.addDays(today, 31),
          unreadMessages: 0

        }).then(() => {
          console.log("Done");
        }).catch(err => {
          console.log(err);
        })

        // Set up TrainerHub for Client/Trainer
        firebase.firestore().collection("trainerHub").add({
          trainerUID: this.trainerData.UID,
          clientUID: user.data().UID

        }).then((doc) => {
          console.log(doc)
        }).catch((err) => {
          console.log(err)
        })

      }

      this.user.clientCount++;

      if (this.user.clientCount >= this.user.maxClients) {
        var isAvailable = false;
        var spacesLeft = this.user.maxClients - this.user.clientCount;

        firebase.firestore().collection("users").doc(this.trainerData.UID).update({
          clientCount: this.user.clientCount,
          isAvailable: isAvailable,
          spacesLeft: spacesLeft

        }).then((doc) => {
          console.log(doc)
        }).catch((err) => {
          console.log(err)
        })
      }
      else {
        var isAvailable = true;
        var spacesLeft = this.user.maxClients - this.user.clientCount;

        firebase.firestore().collection("users").doc(this.trainerData.UID).update({
          clientCount: this.user.clientCount,
          isAvailable: isAvailable,
          spacesLeft: spacesLeft


        }).then((doc) => {
          console.log(doc)
        }).catch((err) => {
          console.log(err)
        })
      }

      let body = {
        // docID: this.getTrainerID()
        trainer: this.trainerData.UID
      }

      this.http.post("https://us-central1-mealmate-ad158.cloudfunctions.net/new_client", JSON.stringify(body), {
        responseType: "text"
      }).subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log(error)
      })



      this.hasPaid = true;
    }
  }

  closeModal() {
    this.navCtrl.pop();
  }

  toTrainerHub() {
    this.navCtrl.setRoot(TrainerhubPage);
  }


}








