import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import moment from 'moment'
import { of } from "rxjs/observable/of";
import firebase from 'firebase';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
import { User } from '../../Models/user';

@IonicPage()
@Component({
  selector: 'page-add-appointment',
  templateUrl: 'add-appointment.html',
})
export class AddAppointmentPage {

  user = {} as User;


  event = {
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
    allDay: false,
    gym : {}
  };
  minDate = new Date().toISOString();
  gyms$ = of([{ id: "westpark", name: "Westpark" }, { id: "flyfit", name: "Flyfit" }, { id: "benDunne", name: "Ben Dunne" }])

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    public viewCtrl: ViewController,
    public fireStore: AngularFirestore, private storage: Storage) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
    
  }

  async getUserData(){
    await this.storage.get('userDocID').then((docId) => {
      

      this.fireStore.doc<any>(`/users/${docId}`).valueChanges().subscribe((user) => {
        
        if(user.role == 1)
        {


          firebase.firestore().collection("appointments").add(this.event).then((doc) => {

            firebase.firestore().collection("appointments").doc(doc.id).update({
              trainerID: user.trainerID,
              clientName: user.firstName + " " + user.surname,
              trainerName: user.trainerName,
              ownerUID: firebase.auth().currentUser.uid,
              clientID: user.UID,
              docID: doc.id


          }).then((doc2) => {
              console.log(doc2)

          }).catch((err) => {
              console.log(err)
          })

          }).catch((err) => {
            console.log(err)
          })
        }
        else
        {
          var clientData = this.navParams.get('clientData');


          firebase.firestore().collection("appointments").add(this.event).then((doc) => {

            firebase.firestore().collection("appointments").doc(doc.id).update({
              trainerID: user.UID,
              trainerName: user.firstName + " " + user.surname,
              ownerUID: firebase.auth().currentUser.uid,
              clientID: clientData.clientUID,
              clientName: clientData.firstName + " " + clientData.surname,
              docID: doc.id


          }).then((doc2) => {
              console.log(doc2)

          }).catch((err) => {
              console.log(err)
          })

          }).catch((err) => {
            console.log(err)
          })
        }

        
       
      });
  
    });

    
  }
  

  cancel() {

    this.viewCtrl.dismiss();
  }

  async save() {

    await this.getUserData();
    
    await this.viewCtrl.dismiss();
  }

  blockDay($event) {
    console.log($event)
  }

  optionSelected($event) {
    console.log($event)
    this.event.gym = $event
  }
}