import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';
import { ProgressPage } from '../progress/progress';
import { TrainersPage } from '../trainers/trainers';
import { ChatPage } from '../chat/chat';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { Chat } from '../../Models/chat';
import { FeedPage } from '../feed/feed';
import { AppointmentsPage } from '../appointments/appointments';



@IonicPage()
@Component({
  selector: 'page-trainerhub',
  templateUrl: 'trainerhub.html',
})
export class TrainerhubPage {

  chat = {} as Chat;
  clientFromList: any;
  clientName: any;
  userData: any;
  users: any[] = [];
  rows: number[];
  hasPaid: boolean;
  menus: Array<{ icon: string; head: string; sub: string; component?: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireStore: AngularFirestore,
    private storage: Storage, private toastCtrl: ToastController) {

    this.getUserData();
  }

  async getUserData() {
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

    await this.getUserRole();
    await this.getClientInfo();

  }

  getUserRole() {
    var role;
    for (let user of this.users) {
      role = user.data().role;

    }

    return role;
  }

  userHasPaid() {
    if (this.getUserRole() == 1) {
      var hasPaid;

      for (let user of this.users) {
        hasPaid = user.data().hasPaid;
      }
    }

    return hasPaid;

  }


  getClientInfo() {
    // Get client data from ClientList
    if (this.getUserRole() == 2) {
      this.clientFromList = this.navParams.get('clientData');
      this.clientName = this.clientFromList.clientName;
    }

    this.assignData();
  }


  getTrainerName() {
    var trainerName;
    for (let user of this.users) {
      trainerName = user.data().trainerName;
    }

    return trainerName;
  }

  assignData() {

    if (this.getUserRole() == 1) {

      this.userData = this.fireStore.doc<any>(`/users/` + firebase.auth().currentUser.uid).valueChanges().subscribe((profile) => {
        this.chat.clientID = profile.UID;
        this.chat.trainerID = profile.trainerID;
        this.hasPaid = profile.hasPaid

        if (profile.hasPaid == false) {

          let toast = this.toastCtrl.create({
            message: "No active subscription."
          });

          toast.present();
          setTimeout(() => {
            toast.dismiss();
          }, 5000);
        }
      });

    }
    else {

      this.userData = this.fireStore.doc<any>(`/users/` + firebase.auth().currentUser.uid).valueChanges().subscribe((profile) => {
        this.chat.clientID = this.clientFromList.clientUID;
        this.chat.trainerID = profile.UID;
      });

    }

  }

  ionViewDidLoad() {


    this.menus = [
      {
        icon: '../assets/imgs/progress-report.png',
        head: 'Progress',
        sub: 'Keep track',

      }, {
        icon: '../assets/imgs/group.png',
        head: 'Group Forum',
        sub: 'Share with others',

      }, {
        icon: '../assets/imgs/appoint.png',
        head: 'Appointments',
        sub: 'Book with trainer',

      }, {
        icon: '../assets/imgs/chat.png',
        head: 'Message',
        sub: 'Get in touch',

      },

    ]
    this.rows = Array.from(Array(Math.ceil(this.menus.length / 2)).keys());
  }

  open(menu: { icon: string; head: string; sub: string; component: any }) {
    if (menu.head == 'Progress') {
      this.navCtrl.push(ProgressPage, { clientData: this.clientFromList })
    }
    else if (menu.head == 'Message') {
      this.navCtrl.push(ChatPage, { userData: this.chat })
    }
    else if (menu.head == 'Group Forum') {
      this.navCtrl.push(FeedPage)
    }
    else {
      this.navCtrl.push(AppointmentsPage, { clientData: this.clientFromList, role: this.getUserRole() })
    }

  }

  navToTrainerListPage() {
    this.navCtrl.setRoot(TrainersPage)
  }

}

