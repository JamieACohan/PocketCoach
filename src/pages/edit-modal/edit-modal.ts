import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { JournalItem } from '../../Models/journal-item/journal-item.interface';


@IonicPage()
@Component({
  selector: 'page-edit-modal',
  templateUrl: 'edit-modal.html',
})
export class EditModalPage {

  entryData: any;
  entryID: any;
  servingSizeData: any;



  journalItem = {} as JournalItem;

  constructor(public navCtrl: NavController, private navParams: NavParams, private view: ViewController) {


  }

  closeEditModal() {



    this.journalItem.calories = this.entryData.calories;
    this.journalItem.carbs = this.entryData.carbs;
    this.journalItem.fat = this.entryData.fat;
    this.journalItem.protein = this.entryData.protein;
    this.journalItem.saturated_fat = this.entryData.saturated_fat;
    this.journalItem.trans_fatty_acid = this.entryData.trans_fatty_acid;
    this.journalItem.polyunsaturated_fat = this.entryData.polyunsaturated_fat;
    this.journalItem.monounsaturated_fat = this.entryData.monounsaturated_fat;
    this.journalItem.cholesterol = this.entryData.cholesterol;
    this.journalItem.sodium = this.entryData.sodium;
    this.journalItem.dietary_fiber = this.entryData.dietary_fiber;
    this.journalItem.sugars = this.entryData.sugars;
    this.journalItem.vitamin_a = this.entryData.vitamin_a;
    this.journalItem.vitamin_c = this.entryData.vitamin_c;
    this.journalItem.calcium = this.entryData.calcium;
    this.journalItem.iron = this.entryData.iron;
    this.journalItem.selectedServingType = this.entryData.selectedServingType;
    this.journalItem.selectedServingSize = this.entryData.selectedServingSize;
    this.journalItem.serving_weight_grams = this.entryData.serving_weight_grams;
    this.journalItem.noServings = this.entryData.noServings;
    this.journalItem.defaultServingSize = this.entryData.defaultServingSize;

    this.view.dismiss({ journalItemObj: this.journalItem });
  }

  saveEditModal() {


    if (this.journalItem.selectedServingSize == 1) {

      this.journalItem.selectedServingType = String(this.journalItem.defaultServingSize) + "g";



      this.journalItem.calories = (this.journalItem.calories * this.journalItem.defaultServingSize) * this.journalItem.noServings;
      this.journalItem.fat = (this.journalItem.fat * this.journalItem.defaultServingSize) * this.journalItem.noServings;
      this.journalItem.carbs = (this.journalItem.carbs * this.journalItem.defaultServingSize) * this.journalItem.noServings;
      this.journalItem.protein = (this.journalItem.protein * this.journalItem.defaultServingSize) * this.journalItem.noServings;
      this.journalItem.saturated_fat = (this.journalItem.saturated_fat * this.journalItem.defaultServingSize) * this.journalItem.noServings;
      this.journalItem.trans_fatty_acid = (this.journalItem.trans_fatty_acid * this.journalItem.defaultServingSize) * this.journalItem.noServings;
      this.journalItem.polyunsaturated_fat = (this.journalItem.polyunsaturated_fat * this.journalItem.defaultServingSize) * this.journalItem.noServings;
      this.journalItem.monounsaturated_fat = (this.journalItem.monounsaturated_fat * this.journalItem.defaultServingSize) * this.journalItem.noServings;
      this.journalItem.cholesterol = (this.journalItem.cholesterol * this.journalItem.defaultServingSize) * this.journalItem.noServings;
      this.journalItem.sodium = (this.journalItem.sodium * this.journalItem.defaultServingSize) * this.journalItem.noServings;
      this.journalItem.dietary_fiber = (this.journalItem.dietary_fiber * this.journalItem.defaultServingSize) * this.journalItem.noServings;
      this.journalItem.sugars = (this.journalItem.sugars * this.journalItem.defaultServingSize) * this.journalItem.noServings;
      this.journalItem.vitamin_a = (this.journalItem.vitamin_a * this.journalItem.defaultServingSize) * this.journalItem.noServings;
      this.journalItem.vitamin_c = (this.journalItem.vitamin_c * this.journalItem.defaultServingSize) * this.journalItem.noServings;
      this.journalItem.iron = (this.journalItem.iron * this.journalItem.defaultServingSize) * this.journalItem.noServings;
      this.journalItem.calcium = (this.journalItem.calcium * this.journalItem.defaultServingSize) * this.journalItem.noServings;
      this.journalItem.serving_weight_grams = this.journalItem.defaultServingSize * this.journalItem.noServings




    }
    else if (this.journalItem.selectedServingSize == 2) {

      this.journalItem.selectedServingType = "1g";

      this.journalItem.calories = this.journalItem.calories * this.journalItem.noServings;
      this.journalItem.fat = this.journalItem.fat * this.journalItem.noServings;
      this.journalItem.carbs = this.journalItem.carbs * this.journalItem.noServings;
      this.journalItem.protein = this.journalItem.protein * this.journalItem.noServings;
      this.journalItem.saturated_fat = this.journalItem.saturated_fat * this.journalItem.noServings;
      this.journalItem.trans_fatty_acid = this.journalItem.trans_fatty_acid * this.journalItem.noServings;
      this.journalItem.polyunsaturated_fat = this.journalItem.polyunsaturated_fat * this.journalItem.noServings;
      this.journalItem.monounsaturated_fat = this.journalItem.monounsaturated_fat * this.journalItem.noServings;
      this.journalItem.cholesterol = this.journalItem.cholesterol * this.journalItem.noServings;
      this.journalItem.sodium = this.journalItem.sodium * this.journalItem.noServings;
      this.journalItem.dietary_fiber = this.journalItem.dietary_fiber * this.journalItem.noServings;
      this.journalItem.sugars = this.journalItem.sugars * this.journalItem.noServings;
      this.journalItem.vitamin_a = this.journalItem.vitamin_a * this.journalItem.noServings;
      this.journalItem.vitamin_c = this.journalItem.vitamin_c * this.journalItem.noServings;
      this.journalItem.iron = this.journalItem.iron * this.journalItem.noServings;
      this.journalItem.calcium = this.journalItem.calcium * this.journalItem.noServings;

      this.journalItem.serving_weight_grams = 1 * this.journalItem.noServings;



    }
    else if (this.journalItem.selectedServingSize == 3) {
      this.journalItem.selectedServingType = "100g";


      this.journalItem.calories = (this.journalItem.calories * 100) * this.journalItem.noServings;
      this.journalItem.fat = (this.journalItem.fat * 100) * this.journalItem.noServings;
      this.journalItem.carbs = (this.journalItem.carbs * 100) * this.journalItem.noServings;
      this.journalItem.protein = (this.journalItem.protein * 100) * this.journalItem.noServings;
      this.journalItem.saturated_fat = (this.journalItem.saturated_fat * 100) * this.journalItem.noServings;
      this.journalItem.trans_fatty_acid = (this.journalItem.trans_fatty_acid * 100) * this.journalItem.noServings;
      this.journalItem.polyunsaturated_fat = (this.journalItem.polyunsaturated_fat * 100) * this.journalItem.noServings;
      this.journalItem.monounsaturated_fat = (this.journalItem.monounsaturated_fat * 100) * this.journalItem.noServings;
      this.journalItem.cholesterol = (this.journalItem.cholesterol * 100) * this.journalItem.noServings;
      this.journalItem.sodium = (this.journalItem.sodium * 100) * this.journalItem.noServings;
      this.journalItem.dietary_fiber = (this.journalItem.dietary_fiber * 100) * this.journalItem.noServings;
      this.journalItem.sugars = (this.journalItem.sugars * 100) * this.journalItem.noServings;
      this.journalItem.vitamin_a = (this.journalItem.vitamin_a * 100) * this.journalItem.noServings;
      this.journalItem.vitamin_c = (this.journalItem.vitamin_c * 100) * this.journalItem.noServings;
      this.journalItem.iron = (this.journalItem.iron * 100) * this.journalItem.noServings;
      this.journalItem.calcium = (this.journalItem.calcium * 100) * this.journalItem.noServings;

      this.journalItem.serving_weight_grams = 100 * this.journalItem.noServings;





    }
    else if (this.journalItem.selectedServingSize == 4) {
      this.journalItem.selectedServingType = "1.0 " + this.journalItem.itemName;

      this.journalItem.defaultServingSize = null;
      this.journalItem.calories = this.journalItem.calories * this.journalItem.noServings;
      this.journalItem.fat = this.journalItem.fat * this.journalItem.noServings;
      this.journalItem.carbs = this.journalItem.carbs * this.journalItem.noServings;
      this.journalItem.protein = this.journalItem.protein * this.journalItem.noServings;
      this.journalItem.saturated_fat = this.journalItem.saturated_fat * this.journalItem.noServings;
      this.journalItem.trans_fatty_acid = this.journalItem.trans_fatty_acid * this.journalItem.noServings;
      this.journalItem.polyunsaturated_fat = this.journalItem.polyunsaturated_fat * this.journalItem.noServings;
      this.journalItem.monounsaturated_fat = this.journalItem.monounsaturated_fat * this.journalItem.noServings;
      this.journalItem.cholesterol = this.journalItem.cholesterol * this.journalItem.noServings;
      this.journalItem.sodium = this.journalItem.sodium * this.journalItem.noServings;
      this.journalItem.dietary_fiber = this.journalItem.dietary_fiber * this.journalItem.noServings;
      this.journalItem.sugars = this.journalItem.sugars * this.journalItem.noServings;
      this.journalItem.vitamin_a = this.journalItem.vitamin_a * this.journalItem.noServings;
      this.journalItem.vitamin_c = this.journalItem.vitamin_c * this.journalItem.noServings;
      this.journalItem.iron = this.journalItem.iron * this.journalItem.noServings;
      this.journalItem.calcium = this.journalItem.calcium * this.journalItem.noServings;
      this.journalItem.serving_weight_grams = null;


    }
    else {
      console.log("error updating data")
    }




    this.view.dismiss({ journalItemObj: this.journalItem });


  }




  ionViewWillLoad() {
    const data = this.navParams.get('data');
    console.log(data.defaultServingSize);



    this.entryData = data;
    this.journalItem.itemName = data.itemName;
    this.journalItem.brandName = data.brandName;



    // For one gram
    if (data.defaultServingSize != null) {
      this.journalItem.calories = Number(data.calories / data.defaultServingSize);
      this.journalItem.fat = Number(data.fat / data.defaultServingSize);
      this.journalItem.carbs = Number(data.carbs / data.defaultServingSize);
      this.journalItem.protein = Number(data.protein / data.defaultServingSize);
      this.journalItem.saturated_fat = Number(data.saturated_fat / data.defaultServingSize);
      this.journalItem.trans_fatty_acid = Number(data.trans_fatty_acid / data.defaultServingSize);
      this.journalItem.polyunsaturated_fat = Number(data.polyunsaturated_fat / data.defaultServingSize);
      this.journalItem.monounsaturated_fat = Number(data.monounsaturated_fat / data.defaultServingSize);
      this.journalItem.cholesterol = Number(data.cholesterol / data.defaultServingSize);
      this.journalItem.sodium = Number(data.sodium / data.defaultServingSize);
      this.journalItem.dietary_fiber = Number(data.dietary_fiber / data.defaultServingSize);
      this.journalItem.sugars = Number(data.sugars / data.defaultServingSize);
      this.journalItem.vitamin_a = Number(data.vitamin_a / data.defaultServingSize);
      this.journalItem.vitamin_c = Number(data.vitamin_c / data.defaultServingSize);
      this.journalItem.iron = Number(data.iron / data.defaultServingSize);
      this.journalItem.calcium = Number(data.calcium / data.defaultServingSize);
      this.journalItem.noServings = Number(data.noServings);
      this.journalItem.selectedServingSize = Number(data.selectedServingSize);
      this.journalItem.selectedServingType = data.selectedServingType;
      this.journalItem.defaultServingSize = data.defaultServingSize;




    }
    else {
      this.journalItem.calories = Number(data.calories / data.noServings);
      this.journalItem.fat = Number(data.fat / data.noServings);
      this.journalItem.carbs = Number(data.carbs / data.noServings);
      this.journalItem.protein = Number(data.protein / data.noServings);
      this.journalItem.saturated_fat = Number(data.saturated_fat / data.noServings);
      this.journalItem.trans_fatty_acid = Number(data.trans_fatty_acid / data.noServings);
      this.journalItem.polyunsaturated_fat = Number(data.polyunsaturated_fat / data.noServings);
      this.journalItem.monounsaturated_fat = Number(data.monounsaturated_fat / data.noServings);
      this.journalItem.cholesterol = Number(data.cholesterol / data.noServings);
      this.journalItem.sodium = Number(data.sodium / data.noServings);
      this.journalItem.dietary_fiber = Number(data.dietary_fiber / data.noServings);
      this.journalItem.sugars = Number(data.sugars / data.noServings);
      this.journalItem.vitamin_a = Number(data.vitamin_a / data.noServings);
      this.journalItem.vitamin_c = Number(data.vitamin_c / data.noServings);
      this.journalItem.iron = Number(data.iron / data.noServings);
      this.journalItem.calcium = Number(data.calcium / data.noServings);
      this.journalItem.noServings = Number(data.noServings);
      this.journalItem.selectedServingSize = Number(data.selectedServingSize);
      this.journalItem.selectedServingType = data.selectedServingType;
      this.journalItem.defaultServingSize = null;
    }

  }





}
