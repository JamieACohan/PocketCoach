import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
import moment from 'moment';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-trainer-apps',
  templateUrl: 'trainer-apps.html',
})
export class TrainerAppsPage {

  apps: any [] = []
  appointments: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireStore: AngularFirestore, private storage: Storage,) {
    this.getAppointments();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainerAppsPage');
  }


  async getAppointments()
  {
    this.appointments = await this.fireStore.collection<any>(`appointments`, ref =>
    ref.where("trainerID", "==", firebase.auth().currentUser.uid).orderBy("startTime", "desc")).valueChanges();

    await this.fireStore.collection<any>(`appointments`, ref =>
    ref.where("trainerID", "==", firebase.auth().currentUser.uid).orderBy("startTime", "desc")).valueChanges().subscribe((apps) => {
      apps.forEach((data) => {
        this.apps.push(data)
      })

    });
  }

  toDate(date)
  {
    var newDate = new Date(date);
    return newDate.toDateString()
  }

  toTime(time)
  {
    var newTime = moment(time).format('HH.mm')
    
    return newTime;
  }


  cancelApp(docID) {
    firebase.firestore().collection("appointments").doc(docID).delete()
      .catch((err) => {
        console.log(err)
      })
  }

}
