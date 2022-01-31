import { ViewTrainerPage } from './../view-trainer/view-trainer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { User } from '../../Models/user';
import { HttpClient } from '@angular/common/http';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';




@IonicPage()
@Component({
  selector: 'page-trainers',
  templateUrl: 'trainers.html',
})
export class TrainersPage {
  user = {} as User;
  users: any[] = [];
  trainers: Observable<any[]>;
  watchCheck: any[] = [];
  onwatchList: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireStore: AngularFirestore,
    public http: HttpClient, private toastCtrl: ToastController) {
    // this.getUserData();
    this.getTrainerData();
   
  
  }

  async getTrainerData() {

    await this.fireStore.collection<any>(`users`, ref =>
    ref.where("role", "==", 2)).valueChanges().subscribe((trainers) => {

      
      this.onWatchList(trainers);


    });


    this.trainers = await this.fireStore.collection<any>(`users`, ref =>
      ref.where("role", "==", 2)).valueChanges();

  }


  onWatchList(trainers)
  {
    
    

    var match = trainers.find(e => e.watchers[firebase.auth().currentUser.uid] === true);

    console.log(match)
    if(match == undefined)
    {
      console.log("Not on list")
      this.onwatchList = false;
    }
    else
    {
      console.log("On list")
      this.onwatchList = true;
    }

  }


  watchlist(trainer) {

    
    console.log(trainer.id)
   
      const trainerDoc = trainer.UID;
      const userId = firebase.auth().currentUser.uid;
      const action = trainer.watchers && trainer.watchers[firebase.auth().currentUser.uid] == true ? "unwatch" : "watch";
    
     
    if(action == 'watch')
    {
      let toast = this.toastCtrl.create({
        message: "You will be notified when trainer becomes available again."
      });

      toast.present();
      setTimeout(() => {
        toast.dismiss();
      }, 5000);
    }
  



    firebase.firestore().collection("users").doc(trainerDoc).get().then((data: any) => {

      let watchersCount = data.data().watchersCount || 0;
      let watchers = data.data().watchers || [];
      console.log(watchers);

      let updateData = {} as any;

      if (action == "watch") {
          updateData["watchersCount"] = ++watchersCount;
          updateData[`watchers.${userId}`] = true;
      } else {
          updateData["watchersCount"] = --watchersCount;
          updateData[`watchers.${userId}`] = false;
      }

      firebase.firestore().collection("users").doc(trainerDoc).update(updateData).then(async () => {

      }).catch((err) => {
          console.log(err)
      })

  }).catch((err) => {
    console.log(err)
  })



  }



  openViewTrainerPage(trainer)
  {
    this.navCtrl.push(ViewTrainerPage, {trainer: trainer});
  }

}
