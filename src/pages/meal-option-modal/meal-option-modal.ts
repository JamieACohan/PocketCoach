import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-meal-option-modal',
  templateUrl: 'meal-option-modal.html',
})
export class MealOptionModalPage {

  breakfast: number;
  lunch: number;
  dinner: number;
  snack: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    this.breakfast = 1;
    this.lunch = 2;
    this.dinner = 3;
    this.snack = 4;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MealOptionModalPage');
  }

  selected(selection)
  {
    this.view.dismiss({mealSelection: selection});
  }

}
