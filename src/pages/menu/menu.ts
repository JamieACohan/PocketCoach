import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import firebase from 'firebase';
import { User } from '../../Models/user';
import { JournalPage } from '../../pages/journal/journal';
import { GoalsPage } from '../../pages/goals/goals';
import { Storage } from '@ionic/storage';
import { TrainersPage } from '../trainers/trainers';
import { TrainerhubPage } from '../trainerhub/trainerhub';
import { ClientListPage } from '../client-list/client-list';
import { Firebase } from '@ionic-native/firebase';
import { ProfilePage } from '../profile/profile';
import { FeedPage } from '../feed/feed';
import { TrainerAppsPage } from '../trainer-apps/trainer-apps';
import {
  AngularFirestore
} from '@angular/fire/firestore';




@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage: any = "LoginPage";

  pages = [];
  user = {} as User;
  users: any[] = [];
  test: any[] = [];

  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private firebaseCordova: Firebase,
  public fireStore: AngularFirestore) {

    this.getEntries();

    this.firebaseCordova.getToken().then((token) => {
      console.log(token)

      this.updateToken(token, firebase.auth().currentUser.uid);
    }).catch((err) => {
      console.log(err)
    })
    
  }

  updateToken(token: string, uid: string){
    firebase.firestore().collection("userTokens").doc(uid).set({
      token: token,
      tokenUpdate: firebase.firestore.FieldValue.serverTimestamp()
    }, {
      merge: true
    }).then(() => {
      console.log("token saved to firestore");
    }).catch(err => {
      console.log(err);
    })
  }

  ionViewDidLoad() {

    this.fireStore.doc<any>(`/users/` + firebase.auth().currentUser.uid).valueChanges().subscribe((profile) => {
      this.user.displayName = profile.displayName;
      this.user.image = profile.image;

    });




  }


  async getEntries(){
    await firebase.firestore().collection("users")
    .where("UID", "==", firebase.auth().currentUser.uid)
    .get()
    .then((docs) => {

      docs.forEach((doc) => {
        this.users.push(doc);
      })
      

    }).catch((err) => {
      console.log(err)
    })

    await this.checkUserRole();

  }



 
  checkUserRole(){
  
    
    for(let entry of this.users){

      this.storage.set('userDocID', entry.id);
      this.storage.set('sex', entry.data().sex);
      this.storage.set('age', entry.data().age);
      this.storage.set('role', entry.data().role);
      
      if(entry.data().role == 0)
      {
        this.pages = [
          { title: 'Home', page: 'AdminHomePage', icon: 'home' }
          
          
        ];
        this.openPage('AdminHomePage');
        console.log("Admin");
      
      } 
      else if (entry.data().role == 1)
      {
      this.pages = [
        { title: 'Profile', page: ProfilePage, icon: 'person'},
        { title: 'Journal', page: JournalPage, icon: "create"},
        { title: 'Goals', page: GoalsPage, icon: 'podium'},
        { title: 'Trainers', page: TrainersPage, icon: 'contacts'},
        { title: 'TrainerHub', page: TrainerhubPage, icon: 'trophy'},
        
      ];
      this.openPage(JournalPage);
      console.log("Client");
      }
      else
      {
        this.pages = [
          { title: 'Profile', page: ProfilePage, icon: 'person'},
          { title: 'Client List', page: ClientListPage, icon: 'contacts' },
          { title: 'Group Feed', page: FeedPage, icon: 'paper' },
          { title: 'Appointments', page: TrainerAppsPage, icon: 'calendar' }
          
        ];
        this.openPage(ClientListPage);
        console.log("Trainer");
      }
    }
    
    
  }

  openPage(page)
  {
    this.nav.setRoot(page); 
  }

  logout(){

    firebase.firestore().collection("userTokens").doc(firebase.auth().currentUser.uid).delete()
    .catch((err) => {
      console.log(err)
    })

    this.navCtrl.setRoot('LoginPage');
    window.location.reload();
  }

}