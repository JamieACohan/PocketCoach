import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { JournalItem } from '../../Models/journal-item/journal-item.interface';
import { JournalPage } from '../journal/journal';
import firebase from 'firebase';
import { AddModalPage } from '../../pages/add-modal/add-modal';

@IonicPage()
@Component({
  selector: 'page-food-details',
  templateUrl: 'food-details.html',
})



export class FoodDetailsPage {
  food: any;
  theDate: any;
  mealOption: number;

  journalItem = {} as JournalItem;



  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController,
    private toast: ToastController) {

    this.journalItem.noServings = 1;
    this.theDate = this.navParams.get('date');
    this.mealOption = this.navParams.get('mealOption');



  }



  openAddModal() {
    const addModal = this.modal.create(AddModalPage, { data: this.journalItem, date: this.theDate });


    addModal.present();

    addModal.onDidDismiss(journalItemObj => {


      this.journalItem.calories = journalItemObj.journalItemObj.calories;
      this.journalItem.carbs = journalItemObj.journalItemObj.carbs;
      this.journalItem.fat = journalItemObj.journalItemObj.fat;
      this.journalItem.protein = journalItemObj.journalItemObj.protein;
      this.journalItem.saturated_fat = journalItemObj.journalItemObj.saturated_fat;
      this.journalItem.trans_fatty_acid = journalItemObj.journalItemObj.trans_fatty_acid;
      this.journalItem.polyunsaturated_fat = journalItemObj.journalItemObj.polyunsaturated_fat;
      this.journalItem.monounsaturated_fat = journalItemObj.journalItemObj.monounsaturated_fat;
      this.journalItem.cholesterol = journalItemObj.journalItemObj.cholesterol;
      this.journalItem.sodium = journalItemObj.journalItemObj.sodium;
      this.journalItem.dietary_fiber = journalItemObj.journalItemObj.dietary_fiber;
      this.journalItem.sugars = journalItemObj.journalItemObj.sugars;
      this.journalItem.vitamin_a = journalItemObj.journalItemObj.vitamin_a;
      this.journalItem.vitamin_c = journalItemObj.journalItemObj.vitamin_c;
      this.journalItem.calcium = journalItemObj.journalItemObj.calcium;
      this.journalItem.iron = journalItemObj.journalItemObj.iron;
      this.journalItem.selectedServingType = journalItemObj.journalItemObj.selectedServingType;
      this.journalItem.selectedServingSize = journalItemObj.journalItemObj.selectedServingSize;
      this.journalItem.serving_weight_grams = journalItemObj.journalItemObj.serving_weight_grams;
      this.journalItem.noServings = journalItemObj.journalItemObj.noServings;
      this.journalItem.defaultServingSize = journalItemObj.journalItemObj.defaultServingSize;
    });

  }

  confirmEntry() {

    firebase.firestore().collection("journalEntries").add({

      owner: firebase.auth().currentUser.uid,
      created: this.theDate,
      mealOption: Number(this.mealOption),
      itemName: this.journalItem.itemName,
      brandName: this.journalItem.brandName,
      calories: this.journalItem.calories,
      carbs: this.journalItem.carbs,
      fat: this.journalItem.fat,
      protein: this.journalItem.protein,
      saturated_fat: Number(this.journalItem.saturated_fat),
      trans_fatty_acid: Number(this.journalItem.trans_fatty_acid),
      polyunsaturated_fat: Number(this.journalItem.polyunsaturated_fat),
      monounsaturated_fat: Number(this.journalItem.monounsaturated_fat),
      cholesterol: Number(this.journalItem.cholesterol),
      sodium: Number(this.journalItem.sodium),
      dietary_fiber: Number(this.journalItem.dietary_fiber),
      sugars: Number(this.journalItem.sugars),
      vitamin_a: Number(this.journalItem.vitamin_a),
      vitamin_c: Number(this.journalItem.vitamin_c),
      calcium: Number(this.journalItem.calcium),
      iron: Number(this.journalItem.iron),
      selectedServingType: this.journalItem.selectedServingType,
      selectedServingSize: Number(this.journalItem.selectedServingSize),
      serving_weight_grams: this.journalItem.serving_weight_grams,
      defaultServingSize: this.journalItem.defaultServingSize,
      noServings: Number(this.journalItem.noServings)

    }).then(async (doc) => {
      console.log(doc)
      await firebase.firestore().collection("journalEntries").doc(doc.id).update({
        id: doc.id
      }).then((doc1) => {
        console.log(doc1)
      }).catch((err) => {
        console.log(err)
      })
    }).catch((err) => {
      console.log(err)
    })

    this.navCtrl.setRoot(JournalPage);
    this.toast.create
      ({
        message: "Added",
        duration: 3000,
        cssClass: "success"
      }).present();

  }


  ionViewDidLoad() {

    

    const food = this.navParams.get("food");
    this.food = food;


    this.journalItem.itemName = food.fields.item_name;
    this.journalItem.brandName = food.fields.brand_name;
    this.journalItem.calories = 0 + food.fields.nf_calories;
    this.journalItem.carbs = 0 + food.fields.nf_total_carbohydrate;
    this.journalItem.fat = 0 + food.fields.nf_total_fat;
    this.journalItem.protein = 0 + food.fields.nf_protein;
    this.journalItem.saturated_fat = 0 + food.fields.nf_saturated_fat;
    this.journalItem.trans_fatty_acid = 0 + food.fields.nf_trans_fatty_acid;
    this.journalItem.polyunsaturated_fat = 0 + food.fields.nf_polyunsaturated_fat;
    this.journalItem.monounsaturated_fat = 0 + food.fields.nf_monounsaturated_fat;
    this.journalItem.cholesterol = 0 + food.fields.nf_cholesterol;
    this.journalItem.sodium = 0 + food.fields.nf_sodium;
    this.journalItem.dietary_fiber = 0 + food.fields.nf_dietary_fiber;
    this.journalItem.sugars = 0 + food.fields.nf_sugars;
    this.journalItem.vitamin_a = 0 + food.fields.nf_vitamin_a_dv;
    this.journalItem.vitamin_c = 0 + food.fields.nf_vitamin_c_dv;
    this.journalItem.calcium = 0 + food.fields.nf_calcium_dv;
    this.journalItem.iron = 0 + food.fields.nf_iron_dv;
    this.journalItem.serving_weight_grams = food.fields.nf_serving_weight_grams;
    this.journalItem.defaultServingSize = food.fields.nf_serving_weight_grams;

    if (this.journalItem.defaultServingSize != null) {
      this.journalItem.selectedServingType = String(this.journalItem.serving_weight_grams) + "g";
      this.journalItem.selectedServingSize = 1;
    }
    else if (this.journalItem.defaultServingSize == null) {
      this.journalItem.selectedServingType = "1.0 " + this.journalItem.itemName;
      this.journalItem.selectedServingSize = 4;
      this.journalItem.defaultServingSize = null;
      console.log("NULL");
    }
    else {
      return console.log("Error");
    }

  }



}
