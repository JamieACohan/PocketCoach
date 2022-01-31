import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { User } from '../../Models/user';



@IonicPage()
@Component({
  selector: 'page-admin-home',
  templateUrl: 'admin-home.html',
})


export class AdminHomePage {

  user = {} as User;
  users: any[] = [];

  constructor(public navCtrl: NavController,public navParams: NavParams) {
   
    
    this.getEntries();

    setTimeout(() => {
      this.addUserID();
      }, 500);
    
    
   
  }

  ionViewDidLoad() {
    

  
  }


  getEntries(){
    firebase.firestore().collection("users")
    .where("email", "==", firebase.auth().currentUser.email)
    .get()
    .then((docs) => {

      docs.forEach((doc) => {
        this.users.push(doc);
      })
      

    }).catch((err) => {
      console.log(err)
    })

    
  }

 
  addUserID(){
  
    
    for(let entry of this.users){

      
      
      if(entry.data().UID == "")
      {
      // Add Firestore UID to User collection
      firebase.firestore().collection("users").doc(entry.id).update({
        UID: firebase.auth().currentUser.uid
        
  
      }).then((doc) => {
        console.log(doc)
      }).catch((err) => {
        console.log(err)
      })
      
    }
    else
    {
      console.log("UID already added");
    }
    }
    
    
  }

  signOut(){
    this.navCtrl.setRoot('LoginPage');
    window.location.reload();
  }


}
