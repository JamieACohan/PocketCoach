import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AddNewWeightPage } from '../add-new-weight/add-new-weight';

@IonicPage()
@Component({
  selector: 'page-progress',
  templateUrl: 'progress.html',
})
export class ProgressPage {

  trainerHub: any[] = [];
  progress: Observable<any[]>;
  clientFromList: any;
  users: any[] = [];
  userRole: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,
    public fireStore: AngularFirestore) {
    this.getUserData();

  }

  ionViewDidLoad() {
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

    await this.getUserRole();
    await this.getClientInfo();
  }

  getUserRole() {
    var role;

    for(let user of this.users)
    {
      role = user.data().role;
    }

    return role;
  }


  async getClientInfo() {
    console.log(this.getUserRole());
    // Get client data from ClientList
    if (this.getUserRole() == 2) {
      this.clientFromList = this.navParams.get('clientData');

    }
    await this.getTrainerHubData();
  }



  // for trainer to get data from trainerhub
  async getTrainerHubData() {


    if (this.getUserRole() == 2) {
      await firebase.firestore().collection("trainerHub")
        .where("clientUID", "==", this.clientFromList.clientUID)
        .get()
        .then((docs) => {

          docs.forEach((doc) => {
            this.trainerHub.push(doc);
          })

          console.log(this.trainerHub)

        }).catch((err) => {
          console.log(err)
        })
    }
    else {
      await firebase.firestore().collection("trainerHub")
        .where("clientUID", "==", firebase.auth().currentUser.uid)
        .get()
        .then((docs) => {

          docs.forEach((doc) => {
            this.trainerHub.push(doc);
          })

          console.log(this.trainerHub)

        }).catch((err) => {
          console.log(err)
        })
    }

    await this.getProgressData();
  }




  getProgressData() {

    var docID;
    for (let t of this.trainerHub) {
      docID = t.data().clientUID;
      this.progress = this.fireStore.collection<any>(`/users/${docID}/progress`, ref =>
        ref.orderBy('timestamp', 'desc')).valueChanges();

    }

  }


  splitTimestamp() {
    // Remove time from time stamp and keeping date
    var todaysDate = new Date();
    var todaysDateString = String(todaysDate);
    var todaysDateSplit = todaysDateString.split(' ').slice(0, 4).join(' ');

    return todaysDateSplit;
  }



  getUserDocID() {
    var docID;
    for (let t of this.trainerHub) {
      docID = t.data().clientUID;
    }
    return docID;
  }



  addNewWeight() {
    this.navCtrl.push(AddNewWeightPage, { docID: this.getUserDocID() });
  }

}
