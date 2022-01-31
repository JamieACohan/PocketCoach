import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import moment from 'moment';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  post: any;
  comments: Observable<any[]>;
  commentsCount: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public fireStore: AngularFirestore) {

    this.post = this.navParams.get("post");
    this.commentsCount = this.post.commentsCount;
    console.log(this.post)


    this.getComments();
  }

  async getComments() {


    this.comments = await this.fireStore.collection<any>(`/comments/`, ref =>
      ref.where('postID', '==', this.post.docID).orderBy("created", "desc")).valueChanges();

  }

  close() {
    this.viewCtrl.dismiss();
  }

  ago(time) {
    let difference = moment(time).diff(moment());
    return moment.duration(difference).humanize();
  }

}