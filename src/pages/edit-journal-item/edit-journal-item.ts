import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { JournalItem } from '../../Models/journal-item/journal-item.interface';
import { JournalPage } from '../journal/journal';
import { EditModalPage } from '../../pages/edit-modal/edit-modal';



@IonicPage()
@Component({
  selector: 'page-edit-journal-item',
  templateUrl: 'edit-journal-item.html',
})
export class EditJournalItemPage {

  journalItemID: string;


  entry: any;
  e: any;

  journalObj: any;

  journalItem = {} as JournalItem;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, private toast: ToastController) {

    this.journalItemID = navParams.get("journalItem_ID");




  }

  ionViewDidLoad() {

    firebase.firestore().collection("journalEntries").doc(this.journalItemID).get()
      .then((doc) => {


        this.entry = doc;

      }).catch((err) => {
        console.log(err)
      })

    const data = this.navParams.get('data');




    this.journalItem.itemName = data.itemName;
    this.journalItem.brandName = data.brandName;
    this.journalItem.calories = data.calories;
    this.journalItem.carbs = data.carbs;
    this.journalItem.fat = data.fat;
    this.journalItem.protein = data.protein;
    this.journalItem.saturated_fat = data.saturated_fat;
    this.journalItem.trans_fatty_acid = data.trans_fatty_acid;
    this.journalItem.polyunsaturated_fat = data.polyunsaturated_fat;
    this.journalItem.monounsaturated_fat = data.monounsaturated_fat;
    this.journalItem.cholesterol = data.cholesterol;
    this.journalItem.sodium = data.sodium;
    this.journalItem.dietary_fiber = data.dietary_fiber;
    this.journalItem.sugars = data.sugars;
    this.journalItem.vitamin_a = data.vitamin_a;
    this.journalItem.vitamin_c = data.vitamin_c;
    this.journalItem.calcium = data.calcium;
    this.journalItem.iron = data.iron;
    this.journalItem.selectedServingType = data.selectedServingType;
    this.journalItem.selectedServingSize = data.selectedServingSize;
    this.journalItem.serving_weight_grams = data.serving_weight_grams;
    this.journalItem.noServings = data.noServings;
    this.journalItem.defaultServingSize = data.defaultServingSize;

  }


  openEditModal() {
    const editModal = this.modal.create(EditModalPage, { data: this.journalItem });

    editModal.present();



    editModal.onDidDismiss(journalItemObj => {


      // this.journalItem.itemName = journalItemObj.journalItemObj.itemName;
      // this.journalItem.brandName = journalItemObj.journalItemObj.brandName;
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






  updateEntry() {

    firebase.firestore().collection("journalEntries").doc(this.journalItemID).update({

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
      noServings: Number(this.journalItem.noServings)

    }).then((doc) => {
      console.log(doc)
    }).catch((err) => {
      console.log(err)
    })


    this.navCtrl.setRoot(JournalPage);
    this.toast.create
      ({
        message: "Updated",
        duration: 3000,
        cssClass: "success"
      }).present();
  }



}

