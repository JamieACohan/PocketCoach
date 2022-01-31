import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { DataProvider } from '../../providers/data/data';
import { FoodDetailsPage } from '../food-details/food-details';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-food-results',
  templateUrl: 'food-results.html',
})
export class FoodResultsPage {


  entries: any[] = [];
  foodData:any;
  foods:any;
  theDate: any;
  
  mealOption: number;

   constructor(public navCtrl: NavController, public navParams: NavParams, private _data: DataProvider, public keyboard: Keyboard) {
    
    this.getEntries();

    const date = this.navParams.get('date');
    console.log(date);
    this.theDate = date;
      
    this.mealOption = this.navParams.get('mealOption');
    console.log(this.mealOption);
  }

  getEntries(){
    firebase.firestore().collection("journalEntries")
    .where("owner", "==", firebase.auth().currentUser.uid)
    .get()
    .then((docs) => {

      docs.forEach((doc) => {
        this.entries.push(doc);
      })

      console.log(this.entries)

    }).catch((err) => {
      console.log(err)
    })

 
  }

  search(term){
    
    let search_term = term;
    this.keyboard.hide();
    this._data.getFoods(search_term)
    .subscribe(res => {
      this.foods = res.hits;
    }, (err) => {
      alert("failed loading json data");
    })
  }

  

  detailsPage(food){


  this.navCtrl.push(FoodDetailsPage, {
    food: food,
    date: this.theDate,
    mealOption: this.mealOption
  })

 
  }

 
}


