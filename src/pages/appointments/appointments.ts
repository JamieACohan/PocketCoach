import { Component } from '@angular/core';
import { NavController, ActionSheetController, ModalController, NavParams, ToastController } from 'ionic-angular';
import { AddAppointmentPage } from '../add-appointment/add-appointment';
import firebase from 'firebase';
import {
  AngularFirestore
} from '@angular/fire/firestore';






@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html',
})
export class AppointmentsPage {
  clientData: any;
  userRole: number;
  selectedDay = new Date()
  selectedObject
  eventSource: any[] = [];
  viewTitle;
  isToday: boolean;
  calendarModes = [
    { key: 'month', value: 'Month' },
    { key: 'week', value: 'Week' },
    { key: 'day', value: 'Day' },
  ]
  calendar = {
    mode: this.calendarModes[0].key,
    currentDate: new Date()
  }; // these are the variable used by the calendar.
  constructor(public navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    public fireStore: AngularFirestore, private navParams: NavParams
    , private toastCtrl: ToastController) {

    this.userRole = this.navParams.get('role');
    console.log(this.userRole)
    if (this.userRole == 2) {
      this.clientData = this.navParams.get('clientData');
      console.log(this.clientData)
    }
    this.getUserData(this.userRole);
  }


  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }
  changeMode(mode) {
    this.calendar.mode = mode;
  }
  today() {
    this.calendar.currentDate = new Date();
  }
  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    this.selectedObject = ev

  }
  onCurrentDateChanged(event: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();

    this.selectedDay = event

  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }
  markDisabled = (date: Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return (date < current);
  };

  openActionSheet(event) {
    console.log('opening');
    let actionsheet = this.actionSheetCtrl.create({
      title: "Choose Option",
      buttons: [
        {
          text: 'Block Date',
          handler: () => {
            console.log("Block Date Clicked: ", event);
            let d = event.selectedTime;
            //d.setHours(0, 0, 0);
            setTimeout(() => {
              this.blockDayEvent(d)
            }, 2);
          }
        },
        {
          text: 'Meet Up With',
          handler: function () {
            console.log("Meet Up With Clicked");
          }
        }
      ]
    }); actionsheet.present();
  }

  blockDayEvent(date) {
    let startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));

    let endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));

    let events = this.eventSource;
    events.push({
      title: 'All Day ',
      startTime: startTime,
      endTime: endTime,
      allDay: true
    });
    this.eventSource = [];
    setTimeout(() => {
      this.eventSource = events;
    });
  }

  addEvent() {
    let modal = this.modalCtrl.create(AddAppointmentPage, { selectedDay: this.selectedDay, clientData: this.clientData });
    modal.present();

  }

  onOptionSelected($event: any) {
    console.log($event)

  }




  async getUserData(role) {

    if (role == 1) {
      await this.fireStore.collection<any>(`appointments`, ref =>
        ref.where("clientID", "==", firebase.auth().currentUser.uid)).valueChanges().subscribe((apps: any) => {


          apps.forEach((data) => {
            if (data) {
              console.log(data)
              let eventData = data;

              eventData.startTime = new Date(data.startTime);
              eventData.endTime = new Date(data.endTime);

              let events = this.eventSource;
              events.push(eventData);
              this.eventSource = [];
              setTimeout(() => {
                this.eventSource = events;
              });
            }
          })






        });
    }
    else {
      await this.fireStore.collection<any>(`appointments`, ref =>
        ref.where("trainerID", "==", firebase.auth().currentUser.uid)).valueChanges().subscribe((apps: any) => {



          apps.forEach((data) => {
            if (data) {
              console.log(data)
              let eventData = data;

              eventData.startTime = new Date(data.startTime);
              eventData.endTime = new Date(data.endTime);

              let events = this.eventSource;
              events.push(eventData);
              this.eventSource = [];
              setTimeout(() => {
                this.eventSource = events;
              });
            }
          })




        });
    }


  }



  async deleteApp(app) {
    await firebase.firestore().collection("appointments").doc(app.docID).delete()
      .catch((err) => {
        console.log(err)
      })

    let toast = this.toastCtrl.create({
      message: "Deleted."
    });

    await toast.present();
    setTimeout(() => {
      toast.dismiss();
    }, 5000);
  }


}