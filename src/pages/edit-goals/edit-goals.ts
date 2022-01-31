import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { Goals } from './../../Models/goals';
import { GoalsPage } from '../goals/goals';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';






@IonicPage()
@Component({
  selector: 'page-edit-goals',
  templateUrl: 'edit-goals.html',
})
export class EditGoalsPage {


  //form validation_messages
  validation_messages = {
    'currentWeight': [
      { type: 'required', message: 'Name is required.' },
      { type: 'min', message: 'Not valid' },
    ],
    'goalWeight': [
      { type: 'required', message: 'Field is required.' },
      { type: 'min', message: 'Not valid' },
    ],
    'weeklyGoal': [
      { type: 'required', message: 'Field is required.' },
      { type: 'min', message: 'Not valid' },
    ],
    'height': [
      { type: 'required', message: 'Field is required.' },
      { type: 'min', message: 'Not valid' },
    ],
    'activityLevel': [

      { type: 'required', message: 'Field is required.' },
    ]
    ,
    'goal': [

      { type: 'required', message: 'Field is required.' }
    ]
  }

  goalsForm;

  goalDocID: any;
  data: any;
  todaysDate: string;

  progressData: any[] = [];
  goalData: any[] = [];
  userData: any[] = [];
  goals = {} as Goals;




  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private storage: Storage,
    public formBuilder: FormBuilder) {

    this.getProgressData();


    this.goalsForm = this.formBuilder.group({
      currentWeight: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(1),
      ])),
      goalWeight: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(1),
      ])),
      weeklyGoal: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(0),
      ])),
      height: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(1),
      ])),
      activityLevel: new FormControl('', Validators.compose([

        Validators.required
      ])),
      goal: new FormControl('', Validators.compose([

        Validators.required
      ]))

    });

  }

  ionViewWillLoad() {
    const data = this.navParams.get('goalData');
    this.data = data;




    if (this.data == 0) {
      this.goals.currentWeight = 0;
      this.goals.goalWeight = 0;
      this.goals.weeklyGoal = 0;
      this.goals.height = 0;
      this.goals.activityLevel = 1;
      this.goals.bmr = 0;
      this.goals.tdee = 0;
      this.goals.leanBodyMass = 0;
      this.goals.bodyFat = 0;
      this.goals.goalCalories = 0;
      this.goals.goalFat = 0;
      this.goals.goalCarbs = 0;
      this.goals.goalProtein = 0;
      this.goals.goal = 1;
      this.goals.totalMatch = true;
      this.goals.proteinPercent = 0;
      this.goals.carbPercent = 0;
      this.goals.fatPercent = 0;
      this.goals.percentTotal = 0;
    }
    else {
      this.goals.currentWeight = data.data().currentWeight;
      this.goals.goalWeight = data.data().goalWeight;
      this.goals.weeklyGoal = data.data().weeklyGoal;
      this.goals.height = data.data().height;
      this.goals.activityLevel = data.data().activityLevel;
      this.goals.bmr = data.data().bmr;
      this.goals.tdee = data.data().tdee;
      this.goals.leanBodyMass = data.data().leanBodyMass;
      this.goals.bodyFat = data.data().bodyFat;
      this.goals.goalCalories = data.data().goalCalories;
      this.goals.goalFat = data.data().goalFat;
      this.goals.goalCarbs = data.data().goalCarbs;
      this.goals.goalProtein = data.data().goalProtein;
      this.goals.goal = data.data().goal;
      this.goals.proteinPercent = data.data().proteinPercent;
      this.goals.carbPercent = data.data().carbPercent;
      this.goals.fatPercent = data.data().fatPercent;
      this.goals.percentTotal = data.data().percentTotal;
      this.goals.totalMatch = data.data().totalMatch;
    }
  }

  getProgressData() {

    this.storage.get('userDocID').then((val) => {



      firebase.firestore().collection("users").doc(val).collection('progress')
        .get()
        .then((docs) => {

          docs.forEach((doc) => {
            this.progressData.push(doc);
            console.log("Hello");
            console.log(this.progressData);
          })

          console.log(this.progressData);

        }).catch((err) => {
          console.log(err)
        })

    });


  }



  splitTimestamp() {
    // Remove time from time stamp and keeping date
    var todaysDate = new Date();
    var todaysDateString = String(todaysDate);
    var todaysDateSplit = todaysDateString.split(' ').slice(0, 4).join(' ');

    return todaysDateSplit;
  }


  getGoalData() {

    this.storage.get('userDocID').then((val) => {
      console.log('userDocID is: ', val);


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


    if (this.data == 0) {

      this.storage.get('userDocID').then((val) => {
        console.log('userDocID is: ', val);


        // Add Firestore UID to User collection
        firebase.firestore().collection("users").doc(val).collection('goals').doc(firebase.auth().currentUser.uid).set({
          UID: firebase.auth().currentUser.uid,
          currentWeight: Number(this.goals.currentWeight),
          goalWeight: Number(this.goals.goalWeight),
          weeklyGoal: Number(this.goals.weeklyGoal),
          height: Number(this.goals.height),
          activityLevel: Number(this.goals.activityLevel),
          bmr: Number(this.goals.bmr),
          tdee: Number(this.goals.tdee),
          leanBodyMass: Number(this.goals.leanBodyMass),
          bodyFat: Number(this.goals.bodyFat),
          goalCalories: Number(this.goals.goalCalories),
          goalFat: Number(this.goals.goalFat),
          goalCarbs: Number(this.goals.goalCarbs),
          goalProtein: Number(this.goals.goalProtein),
          goal: Number(this.goals.goal),
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

      this.storage.get('userDocID').then((docID) => {

        if (this.progressData.length == 0) {
          console.log("Reaches here");
          firebase.firestore().collection("users").doc(docID).collection('progress').add({
            currentWeight: Number(this.goals.currentWeight),
            weightUpdated: this.splitTimestamp()

          }).then((doc) => {
            console.log(doc)
          }).catch((err) => {
            console.log(err)
          })
        }



        var match = this.progressData.find(e => e.data().weightUpdated === this.splitTimestamp());
        console.log(match);
        if (match == null) {
          console.log("Not found");
          firebase.firestore().collection("users").doc(docID).collection('progress').add({
            currentWeight: Number(this.goals.currentWeight),
            weightUpdated: this.splitTimestamp()

          }).then((doc) => {
            console.log(doc)
          }).catch((err) => {
            console.log(err)
          })
        }
        else {
          console.log("Found");
          firebase.firestore().collection("users").doc(docID).collection('progress').doc(match.id).update({
            currentWeight: Number(this.goals.currentWeight),
            weightUpdated: this.splitTimestamp()


          }).then((doc) => {
            console.log(doc)
          }).catch((err) => {
            console.log(err)
          })
        }
      });


      this.navCtrl.setRoot(GoalsPage);
    }
    else {
      //BMR
      //TDEE
      this.storage.get('age').then((val) => {
        var age = val;


        this.storage.get('sex').then((val) => {
          var sex = val;


          //BMR
          //Female
          if (sex.toUpperCase() == "FEMALE") {

            this.goals.bmr = 655 + (9.6 * this.goals.currentWeight) + (1.8 * this.goals.height) - (4.7 * age);

          }
          //Male
          else {
            this.goals.bmr = 66 + (13.7 * this.goals.currentWeight) + (5 * this.goals.height) - (6.8 * age);

          }

          //TDEE
          //Sedentary
          if (this.goals.activityLevel == 1) {
            this.goals.tdee = this.goals.bmr * 1.2;

          }
          //Lightly active
          else if (this.goals.activityLevel == 2) {
            this.goals.tdee = this.goals.bmr * 1.375;

          }
          //Moderately active
          else if (this.goals.activityLevel == 3) {
            this.goals.tdee = this.goals.bmr * 1.55;

          }
          //Very active
          else if (this.goals.activityLevel == 4) {
            this.goals.tdee = this.goals.bmr * 1.725;

          }
          //Extremely active
          else {
            this.goals.tdee = this.goals.bmr * 1.9;

          }


          // Calories based on goals
          //Maintain
          if (this.goals.goal == 1) {
            this.goals.goalCalories = this.goals.tdee;

          }
          // Lose weight
          else if (this.goals.goal == 2) {
            this.goals.goalCalories = this.goals.tdee - 250;

          }
          // Gain weight
          else if (this.goals.goal == 3) {
            this.goals.goalCalories = this.goals.tdee + 250;

          }


          // Macros Initial Split 40/40/20
          this.goals.fatPercent = 0.20;
          this.goals.proteinPercent = 0.40;
          this.goals.carbPercent = 0.40;
          // Carbs = 4cals, Protein = 4cals, Fat = 9cals per gram 
          this.goals.goalCarbs = (this.goals.goalCalories * this.goals.carbPercent) / 4;
          this.goals.goalProtein = (this.goals.goalCalories * this.goals.proteinPercent) / 4;
          this.goals.goalFat = (this.goals.goalCalories * this.goals.fatPercent) / 9;

          this.goals.percentTotal = this.goals.proteinPercent + this.goals.carbPercent + this.goals.fatPercent;


          this.storage.get('userDocID').then((val) => {

            // Add Firestore UID to User collection
            firebase.firestore().collection("users").doc(val).collection('goals').doc(this.data.id)
              .update({
                UID: firebase.auth().currentUser.uid,
                currentWeight: Number(this.goals.currentWeight),
                goalWeight: Number(this.goals.goalWeight),
                weeklyGoal: Number(this.goals.weeklyGoal),
                height: Number(this.goals.height),
                activityLevel: Number(this.goals.activityLevel),
                bmr: Number(this.goals.bmr),
                tdee: Number(this.goals.tdee),
                leanBodyMass: Number(this.goals.leanBodyMass),
                bodyFat: Number(this.goals.bodyFat),
                goalCalories: Number(this.goals.goalCalories.toFixed(0)),
                goalFat: Number(this.goals.goalFat.toFixed(1)),
                goalCarbs: Number(this.goals.goalCarbs.toFixed(1)),
                goalProtein: Number(this.goals.goalProtein.toFixed(1)),
                goal: Number(this.goals.goal),
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

          this.storage.get('userDocID').then((docID) => {


            if (this.progressData.length == 0) {
              console.log("Reaches here");
              firebase.firestore().collection("users").doc(docID).collection('progress').add({
                currentWeight: Number(this.goals.currentWeight),
                weightUpdated: this.splitTimestamp()

              }).then((doc) => {
                console.log(doc)
              }).catch((err) => {
                console.log(err)
              })
            }

            var match = this.progressData.find(e => e.data().weightUpdated === this.splitTimestamp());
            console.log(match);
            if (match == null) {
              console.log("Not found");
              firebase.firestore().collection("users").doc(docID).collection('progress').add({
                currentWeight: Number(this.goals.currentWeight),
                weightUpdated: this.splitTimestamp()

              }).then((doc) => {
                console.log(doc)
              }).catch((err) => {
                console.log(err)
              })
            }
            else {
              console.log("Found");
              firebase.firestore().collection("users").doc(docID).collection('progress').doc(match.id).update({
                currentWeight: Number(this.goals.currentWeight),
                weightUpdated: this.splitTimestamp()


              }).then((doc) => {
                console.log(doc)
              }).catch((err) => {
                console.log(err)
              })
            }

          });
        });
      });
      this.navCtrl.setRoot(GoalsPage);

    }


  }

}
