import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chat } from '../../Models/chat';
import { Message } from '../../Models/message';
import firebase from 'firebase';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  messages: Observable<any[]>;
  message = {} as Message;
  chat = {} as Chat;
  userData: any;
  chatData: any;
  currentUserID: string;
  recipient: Observable<any[]>;
  recipientName: any;
  image: any;
  messageCount: any[] = [];
  userRole: any;
  messageTest: any[] = [];
  checkRead: any;
  count: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireStore: AngularFirestore, private storage: Storage) {

    this.currentUserID = firebase.auth().currentUser.uid;


  }

  ionViewDidLoad() {
    this.userData = this.navParams.get('userData');
    this.getMessages();
    this.getRecipient();
    this.messageSeen();

  }



  messageSeen() {


    this.storage.get('role').then((role) => {
      if (role == 2) {

        firebase.firestore().collection("users").doc(this.userData.trainerID).collection("clientList").doc(this.userData.clientID).update({
          unreadMessages: 0


        }).then((doc) => {
          console.log(doc)
        }).catch((err) => {
          console.log(err)
        })


      }

    });


  }



  getMessages() {
    this.messages = this.fireStore.collection<any>(`/chat/${this.userData.clientID}/messages`, ref =>
      ref.orderBy('timestamp', 'asc')).valueChanges();



  }

  getRecipient() {
    if (this.userData.clientID == firebase.auth().currentUser.uid) {
      this.recipient = this.fireStore.collection<any>(`users`, ref =>
        ref.where("UID", "==", this.userData.trainerID)).valueChanges();
    }
    else {
      this.recipient = this.fireStore.collection<any>(`users`, ref =>
        ref.where("UID", "==", this.userData.clientID)).valueChanges();
    }
  }



  async send() {

    await this.storage.get('role').then((role) => {
      if (role == 1) {

        firebase.firestore().collection("chat").doc(this.userData.clientID).set({
          clientID: this.userData.clientID,
          trainerID: this.userData.trainerID,
          unreadMessages: Number(this.count++)


        }).then((doc) => {
          console.log(doc)
        }).catch((err) => {
          console.log(err)
        })

        firebase.firestore().collection("chat").doc(this.userData.clientID).collection('messages').add({
          messageContent: this.message.messageContent,
          sender: firebase.auth().currentUser.uid,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()


        }).then((doc) => {
          console.log(doc)
          this.message.messageContent = "";

          firebase.firestore().collection("users").doc(this.userData.trainerID).collection("clientList").doc(this.userData.clientID)
            .get()
            .then((doc) => {

              var unread = 0 + doc.data().unreadMessages + 1;

              firebase.firestore().collection("users").doc(this.userData.trainerID).collection("clientList").doc(this.userData.clientID).update({
                unreadMessages: unread


              }).then((doc) => {
                console.log(doc)
              }).catch((err) => {
                console.log(err)
              })

            }).catch((err) => {
              console.log(err)
            })





        }).catch((err) => {
          console.log(err)
        })
      }
      else {
        firebase.firestore().collection("chat").doc(this.userData.clientID).set({
          clientID: this.userData.clientID,
          trainerID: this.userData.trainerID


        }).then((doc) => {
          console.log(doc)
        }).catch((err) => {
          console.log(err)
        })

        firebase.firestore().collection("chat").doc(this.userData.clientID).collection('messages').add({
          messageContent: this.message.messageContent,
          sender: firebase.auth().currentUser.uid,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()


        }).then((doc) => {
          console.log(doc)
          this.message.messageContent = "";
        }).catch((err) => {
          console.log(err)
        })
      }
    });





  }

}
