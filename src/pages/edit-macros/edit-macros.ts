import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';
import { Goals } from './../../Models/goals';
import { GoalsPage } from '../goals/goals';


@IonicPage()
@Component({
  selector: 'page-edit-macros',
  templateUrl: 'edit-macros.html',
})
export class EditMacrosPage {

  goalData: any[] = [];
  goals = {} as Goals;
  test: any;
  data: any;
  calInput: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private toast: ToastController) {


  }

  calorieChange(event) {

    this.save();
  }

  carbChange($event) {
    console.log($event);
    this.goals.carbPercent = Number($event);

    this.save();
  }


  proteinChange($event) {
    console.log($event);
    this.goals.proteinPercent = Number($event);
    this.save();
  }


  fatChange($event) {
    console.log($event);
    this.goals.fatPercent = Number($event);
    this.save();
  }


  ionViewWillLoad() {
    const data = this.navParams.get('goalData');
    this.data = data;


    if (this.data == 0) {
      this.goals.totalMatch = true;
      this.goals.goalCalories = 0;
      this.goals.goalFat = 0;
      this.goals.goalCarbs = 0;
      this.goals.goalProtein = 0;
      this.goals.proteinPercent = 0;
      this.goals.carbPercent = 0;
      this.goals.fatPercent = 0;
      this.goals.percentTotal = 0;

    }
    else {

      this.goals.goalCalories = data.data().goalCalories;
      this.goals.goalFat = data.data().goalFat;
      this.goals.goalCarbs = data.data().goalCarbs;
      this.goals.goalProtein = data.data().goalProtein;
      this.goals.proteinPercent = data.data().proteinPercent;
      this.goals.carbPercent = data.data().carbPercent;
      this.goals.fatPercent = data.data().fatPercent;
      this.goals.percentTotal = data.data().percentTotal;
      this.goals.totalMatch = data.data().totalMatch;
    }
  }
  refresh() {
    window.location.reload();
  }

  getGoalData() {

    this.storage.get('userDocID').then((val) => {



      firebase.firestore().collection("users").doc(val).collection('goals')
        .where("UID", "==", firebase.auth().currentUser.uid)
        .get()
        .then((docs) => {

          docs.forEach((doc) => {
            this.goalData.push(doc);
          })

          console.log(this.goalData)

        }).catch((err) => {
          console.log(err)
        })

    });
  }

  save() {


    this.goals.percentTotal = this.goals.proteinPercent + this.goals.carbPercent + this.goals.fatPercent;

    // Carbs = 4cals, Protein = 4cals, Fat = 9cals per gram 
    this.goals.goalCarbs = (this.goals.goalCalories * this.goals.carbPercent) / 4;
    this.goals.goalProtein = (this.goals.goalCalories * this.goals.proteinPercent) / 4;
    this.goals.goalFat = (this.goals.goalCalories * this.goals.fatPercent) / 9;


  }



  saveDataToFirebase() {
    this.storage.get('userDocID').then((val) => {
      console.log('userDocID is: ', val);


      // Add Firestore UID to User collection
      firebase.firestore().collection("users").doc(val).collection('goals').doc(this.data.id)
        .update({
          goalCalories: Number(this.goals.goalCalories),
          goalFat: Number(this.goals.goalFat),
          goalCarbs: Number(this.goals.goalCarbs),
          goalProtein: Number(this.goals.goalProtein),
          totalMatch: this.goals.totalMatch,
          proteinPercent: Number(this.goals.proteinPercent),
          carbPercent: Number(this.goals.carbPercent),
          fatPercent: Number(this.goals.fatPercent),
          percentTotal: Number(this.goals.percentTotal),



        }).then((doc) => {
          console.log(doc)
        }).catch((err) => {
          console.log(err)
        })

    });



    this.navCtrl.setRoot(GoalsPage);


    this.toast.create
      ({
        message: "Macros Updated",
        duration: 3000,
        cssClass: "success"
      }).present();
  }





}
