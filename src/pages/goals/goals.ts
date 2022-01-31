import { EditMacrosPage } from './../edit-macros/edit-macros';
import { EditGoalsPage } from './../edit-goals/edit-goals';
import { Goals } from './../../Models/goals';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';




@IonicPage()
@Component({
  selector: 'page-goals',
  templateUrl: 'goals.html',
})
export class GoalsPage {

  goalData: any[] = [];
  userData: any[] = [];
  goals = {} as Goals;
  test: any;
  checker: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    this.getGoalData();
    // this.checkIfCollectionExists();

   
    
  }

  getActivityLevel()
  {
    var level;

    for(let goal of this.goalData)
    {
      if(goal.data().activityLevel == 1)
      {
        level = "Sedentary";
      }
      else if(goal.data().activityLevel == 2)
      {
        level = "Lightly active";
      }
      else if(goal.data().activityLevel == 3)
      {
        level = "Moderately active";
      }
      else if(goal.data().activityLevel == 4)
      {
        level = "Very active";
      }
      else
      {
        level = "Extremely active";
      }
      
    }

    return level;
  }


  editGoals()
  {
    if(this.goalData.length == 0)
    {
      this.checker = 0;
      this.navCtrl.push(EditGoalsPage, {goalData: this.checker});
    }
    else{
      for(let entry of this.goalData)
      {
        this.navCtrl.push(EditGoalsPage, {goalData: entry});
        
      }
    }
    // this.navCtrl.push(EditGoalsPage, {goalData: entry});
      
    }

    editMacros()
    {
      if(this.goalData.length == 0)
      {
        this.checker = 0;
        this.navCtrl.push(EditMacrosPage, {goalData: this.checker});
      }
      else{
        for(let entry of this.goalData)
        {
          this.navCtrl.push(EditMacrosPage, {goalData: entry});
          
        }
      }
    }
  

    getGoalData()
    {
      this.storage.get('userDocID').then((val) => {
  
      let query = firebase.firestore().collection("users").doc(val).collection('goals').where("UID", "==", firebase.auth().currentUser.uid);
  
      query.onSnapshot((snapshot) => {
        let changedDocs = snapshot.docChanges();
  
        changedDocs.forEach((change) => {
          if(change.type == "added"){
            //TODO
  
            var match = this.goalData.find(e => e.id !== change.doc.id);
            console.log(match);
            if (match == undefined)
            {
              console.log("Already added")
  
            }
            else
            {
              this.goalData.push(change.doc);
              
            }
  
          }
  
          if(change.type == "modified"){
            //TODO
            console.log("Modified doc " + change.doc.id);
            for(let i = 0; i < this.goalData.length; i++)
            {
              if(this.goalData[i].id == change.doc.id)
              {
                this.goalData[i] = change.doc;
              }
            }
          }
  
          if(change.type == "removed"){
            for(let i = 0; i < this.goalData.length; i++)
            {
              if(this.goalData[i].id == change.doc.id)
              {
                this.goalData.splice(i, 1);
              }
            }
  
          }
        })
      })
      
      
      query.get()
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
}
