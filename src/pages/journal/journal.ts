import { MealOptionModalPage } from './../meal-option-modal/meal-option-modal';
import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ToastController, ModalController } from 'ionic-angular';
import { FoodResultsPage } from '../food-results/food-results';
import { AngularFireDatabase } from "angularfire2/database"; 
import firebase from 'firebase';
import { EditJournalItemPage } from '../../pages/edit-journal-item/edit-journal-item';
import { Storage } from '@ionic/storage';
import { JournalItem } from '../../Models/journal-item/journal-item.interface';
import { MacroBreakdownPage } from '../macro-breakdown/macro-breakdown';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'page-journal',
  templateUrl: 'journal.html'
})
export class JournalPage {

  entries: Observable<any[]>;
  foodItems: any[] = [];
  goalData: any[] = [];
  food: any[] = [];
  entry: any;

  now = new Date();
  nowString: any;
  dateString: any;
  goalCalories: any;
  totalCalories: number = 0;
  totalCalsForBreakfast: number = 0;
  totalCalsForLunch: number = 0;
  totalCalsForDinner: number = 0;
  totalCalsForSnacks: number = 0;
  
 
  
  journalItem = {} as JournalItem;
  
  

   constructor(public navCtrl: NavController, public navParams: NavParams, private actionSheetCtrl: ActionSheetController,
    private storage: Storage, private toast: ToastController, private modal: ModalController, public fireStore: AngularFirestore) {

    this.getGoalData();
    this.getFoodData();
    
    // this.setValues();
    // this.getCalories();
    const newDate = this.navParams.get('newDate');
    if(newDate != null){
      this.now = newDate;

    
    }
    
    
    this.dateString = this.now.toDateString();

    this.getFood()


  }


  macroBreakdown()
  {
    const macroModal = this.modal.create(MacroBreakdownPage);
  
      
    macroModal.present();
     
  }


  async getGoalData() {

    
    await this.fireStore.doc<any>(`/users/${firebase.auth().currentUser.uid}/goals/${firebase.auth().currentUser.uid}`).valueChanges().subscribe((goals) => {

      this.getGoalCals(goals);

    });

}

getGoalCals(goals)
{

  if(goals == undefined)
  {
    console.log("Empty List")
    this.goalCalories = 0;
  }
  else
  {
    console.log("List contains data")
    this.goalCalories = goals.goalCalories;
  }

}

async getFoodData() {


  await this.fireStore.collection<any>(`journalEntries`, ref =>
    ref.where("owner", "==", firebase.auth().currentUser.uid)).valueChanges().subscribe((entries) => {

      // this.getTotalCalories(entries);


    });

    this.entries = await this.fireStore.collection<any>(`journalEntries`, ref =>
    ref.where("owner", "==", firebase.auth().currentUser.uid)).valueChanges();

    


}

  // getTotalCalories(){
  //   for(let entry of this.food){

  //     if(this.dateString == entry.created)
  //     {
  //     this.totalCalories += entry.calories;
  //     }

  //     // For breakfast
  //     if(entry.mealOption == 1 && this.dateString == entry.created)
  //     {
  //       this.totalCalsForBreakfast += entry.calories;
  //     }
  //     // For Lunch
  //     else if(entry.mealOption == 2 && this.dateString == entry.created)
  //     {
  //       this.totalCalsForLunch += entry.calories;
  //     }
  //     else if(entry.mealOption == 3 && this.dateString == entry.created)
  //     {
  //       this.totalCalsForDinner += entry.calories;
  //     }
  //     else if(entry.mealOption == 4 && this.dateString == entry.created)
  //     {
  //       this.totalCalsForSnacks += entry.calories;
  //     }
  //     else
  //     {
  //       console.log("Error: Invalid meal option")
  //     }

  //   }

  // }

  getFood()
  {
   

    let query = firebase.firestore().collection("journalEntries").where("owner", "==", firebase.auth().currentUser.uid);

    query.onSnapshot((snapshot) => {
      let changedDocs = snapshot.docChanges();

      changedDocs.forEach((change) => {
        if(change.type == "added"){
          //TODO

          var match = this.food.find(e => e.id !== change.doc.id);
          console.log(match);
          if (match == undefined)
          {
            console.log("Already added")

          }
          else
          {
            this.food.push(change.doc);
            this.navCtrl.setRoot(JournalPage);
            
          }

        }

        if(change.type == "modified"){
          //TODO
          console.log("Modified doc " + change.doc.id);
          for(let i = 0; i < this.food.length; i++)
          {
            if(this.food[i].id == change.doc.id)
            {
              this.food[i] = change.doc;
            }
          }
        }

        if(change.type == "removed"){
          for(let i = 0; i < this.food.length; i++)
          {
            if(this.food[i].id == change.doc.id)
            {
              this.food.splice(i, 1);
            }
          }

        }

    })
    
    
    query.get()
    .then((docs) => {

      docs.forEach((doc) => {
        this.food.push(doc);
      })

      console.log(this.food)

    }).catch((err) => {
      console.log(err)
    })
    
  });
}


getTotalCalories(){
  var total = 0;
  for(let entry of this.food){
    if(this.dateString == entry.data().created){

    
    total += entry.data().calories;
    }
  }
  return total;
}

getTotalCalsForBreakfast()
{
  var total = 0;
  for(let entry of this.food){
    if(this.dateString == entry.data().created && entry.data().mealOption == 1){

    
    total += entry.data().calories;
    }
  }
  return total;
}

getTotalCalsForLunch()
{
  var total = 0;
  for(let entry of this.food){
    if(this.dateString == entry.data().created && entry.data().mealOption == 2){

    
    total += entry.data().calories;
    }
  }
  return total;
}

getTotalCalsForDinner()
{
  var total = 0;
  for(let entry of this.food){
    if(this.dateString == entry.data().created && entry.data().mealOption == 3){

    
    total += entry.data().calories;
    }
  }
  return total;
}

getTotalCalsForSnacks()
{
  var total = 0;
  for(let entry of this.food){
    if(this.dateString == entry.data().created && entry.data().mealOption == 4){

    
    total += entry.data().calories;
    }
  }
  return total;
}




  
  selectEntry(food){

    
    

    this.actionSheetCtrl.create({
      title: `${food.itemName}`,
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            this.navCtrl.push(EditJournalItemPage, {journalItem_ID: food.id, data: food});
          }
        },
        {
          text: 'Delete',
          role: `destructive`,
          handler: () => {
            firebase.firestore().collection("journalEntries").doc(food.id).delete();
            console.log("Entry Deleted");
            this.navCtrl.setRoot(JournalPage);
            this.toast.create
            ({
              message: "Deleted",
              duration: 3000,
              cssClass: "success"
            }).present();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("User has selected cancel button");
          }
        }
      ]
      
    }).present();
    
  }
  
  
  openModal()
  {
    const myModal = this.modal.create(MealOptionModalPage);
    myModal.present();

    myModal.onDidDismiss(mealSelection => {
  
     var selection1 = mealSelection.mealSelection;
     console.log(selection1);
     this.navCtrl.push(FoodResultsPage, {mealOption: selection1, date: this.dateString});
      
    });
  }

  navToFoodResultsPage(){
     this.navCtrl.push(FoodResultsPage, {date: this.dateString});
  }

 
  increment(){
    this.now.setDate(this.now.getDate() + 1);
    console.log(this.now);
    this.navCtrl.setRoot(JournalPage, {newDate: this.now});
    
  }

  decrement(){
    this.now.setDate(this.now.getDate() - 1);
    console.log(this.now);
    this.navCtrl.setRoot(JournalPage, {newDate: this.now});
    
  }

  

  


}
