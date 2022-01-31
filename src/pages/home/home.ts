import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { User } from '../../Models/user';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {} as User;
  users: any[] = [];
  now: any = new Date();


  constructor(public navCtrl: NavController,public navParams: NavParams) {

    this.addDays(this.now, 1);
    // const today = new Date();
    // console.log(today);
    var date = new Date().toISOString();
    console.log(date);
    var splitISO = date.split('T').slice(0, 1).join('T');
    console.log("Today Split " + splitISO);

    var newDate = new Date('Mar 01 2019').toDateString().split(' ').slice(1, 4).join(' ');
    console.log('This worked haha ' + newDate);
    // var newerDate = new Date().toDateString();
    // console.log('Worked again', + newDate.toDateString())
  }

  addDays(date: Date, days: number){
    date.setDate(date.getDate() + days);
    
    console.log(date.toDateString())
    
    console.log(date.toDateString().split(' ').slice(1, 4).join(' '));

    // var todayString = String(date);
    // var dateString = todayString.split(' ').slice(1, 4).join(' ');
    // console.log(dateString);
    // console.log(date.getFullYear(),new Date().getMonth(), new Date().getDate());
    return date;
}


  }

 


  




 



