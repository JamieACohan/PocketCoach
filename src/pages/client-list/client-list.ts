import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TrainerhubPage } from '../trainerhub/trainerhub';
import { User } from '../../Models/user';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import firebase from 'firebase';
import { Observable } from 'rxjs';


@IonicPage()
@Component({
  selector: 'page-client-list',
  templateUrl: 'client-list.html',
})
export class ClientListPage {

  clientList: any[] = [];
  clientData: Observable<any[]>;
  user = {} as User;
  messages: any[] = [];
  clientID: any;
  checker: any;
  unread: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public fireStore: AngularFirestore) {
    this.getClientData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientListPage');
  }


  async getClientData() {

    this.clientData = await this.fireStore.collection<any>(`/users/${firebase.auth().currentUser.uid}/clientList`).valueChanges();

    await this.fireStore.collection<any>(`/users/${firebase.auth().currentUser.uid}/clientList`).valueChanges().subscribe((clients: any) => {

      clients.forEach((data) => {
        this.clientList.push(data)
      })

    });

  }




  openTrainerHub(client) {
    this.navCtrl.setRoot(TrainerhubPage, { clientData: client });
  }




}
