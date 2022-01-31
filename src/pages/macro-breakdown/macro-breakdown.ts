import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
import { JournalItem, GoalMacros, RemaiingMacros } from '../../Models/journal-item/journal-item.interface';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-macro-breakdown',
  templateUrl: 'macro-breakdown.html',
})
export class MacroBreakdownPage {

  now = new Date();
  journalItem = {} as JournalItem;
  goalMacros = {} as GoalMacros;
  remainingMacros = {} as RemaiingMacros;
  test: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public fireStore: AngularFirestore, private storage: Storage,
  private viewCtrl: ViewController) {

    const newDate = this.navParams.get('newDate');
    if(newDate != null){
      this.now = newDate;

    
    }
    
    this.getEntries();
    this.getGoalData();
   
  }

  ionViewDidLoad() {
    
  }

  async getEntries() {

    await this.fireStore.collection<any>(`journalEntries`, ref =>
    ref.where("owner", "==", firebase.auth().currentUser.uid).where("created", "==", this.now.toDateString())).valueChanges().subscribe((entries) => {
  
      console.log(entries)

      this.getTotalMacroCount(entries);

    });

    
  }

  async getGoalData() {

    await this.storage.get('userDocID').then((docID) => {
      
      this.fireStore.collection<any>(`/users/${docID}/goals`).valueChanges().subscribe((goals) => {
  
        console.log(goals)
  
        this.assignGoalData(goals);
  
      });
    });

  }


  getTotalMacroCount(entryList)
  {
    this.journalItem.protein = 0;
    this.journalItem.carbs = 0;
    this.journalItem.fat = 0;
    this.journalItem.saturated_fat = 0;
    this.journalItem.trans_fatty_acid = 0;
    this.journalItem.polyunsaturated_fat = 0;
    this.journalItem.monounsaturated_fat = 0;
    this.journalItem.cholesterol = 0;
    this.journalItem.sodium = 0;
    this.journalItem.dietary_fiber = 0;
    this.journalItem.sugars = 0;
    this.journalItem.vitamin_a = 0;
    this.journalItem.vitamin_c = 0;
    this.journalItem.calcium = 0;
    this.journalItem.iron = 0;

    for(let entry of entryList)
    {
      
      this.journalItem.protein += entry.protein;
      this.journalItem.carbs += entry.carbs;
      this.journalItem.fat += entry.fat;
      this.journalItem.saturated_fat += entry.saturated_fat;
      this.journalItem.trans_fatty_acid += entry.trans_fatty_acid;
      this.journalItem.polyunsaturated_fat += entry.polyunsaturated_fat;
      this.journalItem.monounsaturated_fat += entry.monounsaturated_fat;
      this.journalItem.cholesterol += entry.cholesterol;
      this.journalItem.sodium += entry.sodium;
      this.journalItem.dietary_fiber += entry.dietary_fiber;
      this.journalItem.sugars += entry.sugars;
      this.journalItem.vitamin_a += entry.vitamin_a;
      this.journalItem.vitamin_c += entry.vitamin_c;
      this.journalItem.calcium += entry.calcium;
      this.journalItem.iron += entry.iron;
      
      
    }
  }

  assignGoalData(goalData)
  {
    this.goalMacros.protein = 0;
    this.goalMacros.fat = 0;
    this.goalMacros.carbs = 0;
    this.goalMacros.saturated_fat = 17;
    this.goalMacros.trans_fatty_acid = 0;
    this.goalMacros.polyunsaturated_fat = 0;
    this.goalMacros.monounsaturated_fat = 0;
    this.goalMacros.cholesterol = 300;
    this.goalMacros.sodium = 2300;
    this.goalMacros.dietary_fiber = 38;
    this.goalMacros.sugars = 56;
    this.goalMacros.vitamin_a = 100;
    this.goalMacros.vitamin_c = 100;
    this.goalMacros.calcium = 100;
    this.goalMacros.iron = 100;

    for(let goal of goalData)
    {
      this.goalMacros.protein = goal.goalProtein | 0;
      this.goalMacros.fat = goal.goalFat | 0;
      this.goalMacros.carbs = goal.goalCarbs | 0;
    }
  }


  increment(){
    this.now.setDate(this.now.getDate() + 1);
    console.log(this.now);
    this.navCtrl.setRoot(MacroBreakdownPage, {newDate: this.now});
    
  }

  decrement(){
    this.now.setDate(this.now.getDate() - 1);
    console.log(this.now);
    this.navCtrl.setRoot(MacroBreakdownPage, {newDate: this.now});
    
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
