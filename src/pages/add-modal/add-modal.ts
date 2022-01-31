import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { JournalItem } from '../../Models/journal-item/journal-item.interface';
import { Macro_Counter } from '../../Models/macro_counter';



@IonicPage()
@Component({
  selector: 'page-add-modal',
  templateUrl: 'add-modal.html',
})
export class AddModalPage {

  entryData: any;
  

  journalItem = {} as JournalItem;
  macro_counter = {} as Macro_Counter;

  theDate: any;




  constructor(public navCtrl: NavController, private navParams: NavParams, private view: ViewController, private toast: ToastController) {

    
   
    
    const date = this.navParams.get('date');
    this.theDate = date;
    
  }

  ionViewWillLoad() {
    const data = this.navParams.get('data');

    
    
    this.entryData = data;
    this.journalItem.itemName = data.itemName;
    this.journalItem.brandName = data.brandName;
    this.journalItem.serving_weight_grams = data.defaultServingSize;

      // For one gram
      if(data.defaultServingSize != null)
      {
      this.journalItem.calories = Number(data.calories / data.serving_weight_grams);
      this.journalItem.fat = Number(data.fat / data.serving_weight_grams);
      this.journalItem.carbs = Number(data.carbs / data.serving_weight_grams);
      this.journalItem.protein = Number(data.protein / data.serving_weight_grams);
      this.journalItem.saturated_fat = Number(data.saturated_fat / data.serving_weight_grams);
      this.journalItem.trans_fatty_acid = Number(data.trans_fatty_acid / data.serving_weight_grams);
      this.journalItem.polyunsaturated_fat = Number(data.polyunsaturated_fat / data.serving_weight_grams);
      this.journalItem.monounsaturated_fat = Number(data.monounsaturated_fat / data.serving_weight_grams);
      this.journalItem.cholesterol = Number(data.cholesterol / data.serving_weight_grams);
      this.journalItem.sodium = Number(data.sodium / data.serving_weight_grams);
      this.journalItem.dietary_fiber = Number(data.dietary_fiber / data.serving_weight_grams);
      this.journalItem.sugars = Number(data.sugars / data.serving_weight_grams);
      this.journalItem.vitamin_a = Number(data.vitamin_a / data.serving_weight_grams);
      this.journalItem.vitamin_c = Number(data.vitamin_c / data.serving_weight_grams);
      this.journalItem.iron = Number(data.iron / data.serving_weight_grams);
      this.journalItem.calcium = Number(data.calcium / data.serving_weight_grams);
      this.journalItem.defaultServingSize = Number(data.defaultServingSize);
      this.journalItem.selectedServingType = String(this.journalItem.defaultServingSize) + "g";
      this.journalItem.noServings = Number(data.noServings);
      this.journalItem.selectedServingSize = data.selectedServingSize;
      

      }
      else
      {
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
        this.journalItem.defaultServingSize = null;
        this.journalItem.selectedServingType = "1.0 " + this.journalItem.itemName;
        this.journalItem.noServings = Number(data.noServings);
        this.journalItem.selectedServingSize = data.selectedServingSize;
        
      }

  }

  closeAddModal(){
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
    this.journalItem.calcium  = this.entryData.calcium;
    this.journalItem.iron = this.entryData.iron;
    this.journalItem.serving_weight_grams = this.entryData.serving_weight_grams;
    this.journalItem.noServings = this.entryData.noServings;
    this.journalItem.selectedServingSize = this.entryData.selectedServingSize;
    this.journalItem.selectedServingType = this.entryData.selectedServingType;


    this.view.dismiss({journalItemObj: this.journalItem});
  }

  saveAddModal(){

    if(this.journalItem.selectedServingSize == 1)
    {

    this.journalItem.selectedServingType = String(this.journalItem.defaultServingSize) + "g";

    
    
      //Macros 
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
    

    //Servings
    this.journalItem.serving_weight_grams = this.journalItem.serving_weight_grams * this.journalItem.noServings;
   


  


  }
  else if (this.journalItem.selectedServingSize == 2)
  {

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
  else if (this.journalItem.selectedServingSize == 3)
  {
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
  else if(this.journalItem.selectedServingSize == 4){
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
    

   
  }
  else{
    console.log("error updating data")
  }
  
  this.view.dismiss({journalItemObj: this.journalItem});
  
}
}



