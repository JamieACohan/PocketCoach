import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, ActionSheetController, AlertController, ModalController } from 'ionic-angular';
import firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../Models/post';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import moment from 'moment';
import { CommentsPage } from '../comments/comments';



@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  post = {} as Post;
  postList: any[] = [];
  posts: Observable<any[]>;
  cursor: any;
  pageSize: number = 10;
  image: any;
  trainerUID: any;
  currentUID: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private toastCtrl: ToastController, private http: HttpClient, private actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController, private modalCtrl: ModalController,
    public fireStore: AngularFirestore, private storage: Storage, private camara: Camera) {
    this.getUserData();
    // this.getPosts();
    this.getCurrentTime();
    this.post.content = "";
    this.currentUID = firebase.auth().currentUser.uid;

  }

  async getPosts(trainerID) {


    this.posts = await this.fireStore.collection<any>(`/posts/`, ref =>
      ref.where("trainerUID", "==", trainerID).orderBy('timestamp', 'desc')).valueChanges();


    await this.fireStore.collection<any>(`/posts/`, ref =>
      ref.where("trainerUID", "==", trainerID).orderBy('timestamp', 'desc')).valueChanges().subscribe((posts: any) => {

        posts.forEach((data) => {
          this.postList.push(data)
        })

      });



  }



  getCurrentTime() {

    var now = new Date();
    return now;
  }


  postStatus() {

    if (this.post.content != "") {
      var now = new Date().toISOString();
      firebase.firestore().collection("posts").add({
        content: this.post.content,
        timestamp: now,
        ownerUID: firebase.auth().currentUser.uid,
        ownerName: this.post.ownerName,
        trainerUID: this.post.trainerUID
      }).then((doc: any) => {
        console.log(doc)

        firebase.firestore().collection("posts").doc(doc.id).update({
          docID: doc.id
        }).catch((err) => {
          console.log(err)
        })

        if (this.post.image) {
          this.upload(doc.id)
        }

        this.post.content = "";
        this.post.image = undefined;

        let toast = this.toastCtrl.create({
          message: "Your post has been created successfully.",
          duration: 3000
        }).present();

      }).catch((err) => {
        console.log(err)
      })
    }
    else {
      let toast = this.toastCtrl.create({
        message: "Failed: No content in post",
        duration: 3000
      }).present();
    }



  }

  ago(time) {
    let difference = moment(time).diff(moment());
    return moment.duration(difference).humanize();
  }

  async getUserData() {
    await this.storage.get('role').then((role) => {

      if (role == 1) {
        this.storage.get('userDocID').then((docID) => {
          this.fireStore.doc<any>(`/users/` + docID).valueChanges().subscribe((profile) => {
            this.post.ownerName = profile.displayName;
            this.post.ownerUID = profile.UID;
            this.post.trainerUID = profile.trainerID;
            this.getPosts(profile.trainerID)
          })
        });
      }
      else {
        this.storage.get('userDocID').then((docID) => {
          this.fireStore.doc<any>(`/users/` + docID).valueChanges().subscribe((profile) => {
            this.post.ownerName = profile.displayName;
            this.post.ownerUID = profile.UID;
            this.post.trainerUID = profile.UID;
            this.getPosts(profile.UID)
          })
        });
      }

    });
  }




  addPhoto() {
    this.launchCamara();

  }

  launchCamara() {
    let options: CameraOptions = {
      quality: 100,
      sourceType: this.camara.PictureSourceType.CAMERA,
      destinationType: this.camara.DestinationType.DATA_URL,
      encodingType: this.camara.EncodingType.PNG,
      mediaType: this.camara.MediaType.PICTURE,
      correctOrientation: true,
      targetHeight: 512,
      targetWidth: 512,
      allowEdit: true
    }


    this.camara.getPicture(options).then((toBase64String) => {
      console.log(toBase64String);

      this.post.image = "data:image/png;base64," + toBase64String;

    }).catch((err) => {
      console.log(err)
    })
  }

  upload(postID) {

    return new Promise((resolve, reject) => {

      let loading = this.loadingCtrl.create({
        content: "Uploading Image..."
      })

      let ref = firebase.storage().ref("profilePictures/" + postID);

      let uploadTask = ref.putString(this.post.image.split(',')[1], "base64");

      uploadTask.on("state_changed", (taskSnapshot: any) => {
        console.log(taskSnapshot)

        let percentage = taskSnapshot.bytesTransferred / taskSnapshot.totalBytes * 100;
        loading.setContent("Uploaded " + percentage + "% ...")

      }, (error) => {
        console.log(error)
      }, () => {
        console.log("The upload is completed!");

        uploadTask.snapshot.ref.getDownloadURL().then((url) => {

          firebase.firestore().collection("posts").doc(postID).update({
            image: url
          }).then(() => {
            loading.dismiss()
            resolve()
          }).catch((err) => {
            loading.dismiss()
            reject()
          })
        }).catch((err) => {
          loading.dismiss()
          reject()
        })

      })
    })

  }


  async deletePost(post) {
    await firebase.firestore().collection("posts").doc(post.docID).delete()
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



  async like(post) {


    const postId = post.docID;
    const currentUserId = firebase.auth().currentUser.uid;
    const action = post.likes && post.likes[firebase.auth().currentUser.uid] == true ? "unlike" : "like";


    let toast = this.toastCtrl.create({
      message: "Liked."
    });

    toast.present();
    setTimeout(() => {
      toast.dismiss();
    }, 5000);

    await firebase.firestore().collection("posts").doc(postId).get().then(async (data: any) => {

      let likesCount = data.data().likesCount || 0;
      let likes = data.data().likes || [];


      let updateData = {} as any;

      if (action == "like") {
        updateData["likesCount"] = ++likesCount;
        updateData[`likes.${currentUserId}`] = true;
      } else {
        updateData["likesCount"] = --likesCount;
        updateData[`likes.${currentUserId}`] = false;
      }

      await firebase.firestore().collection("posts").doc(postId).update(updateData).then(async () => {

        if (action == "like") {



          let body = {
            // docID: this.getTrainerID()
            userId: post.ownerUID,
            action: 'new_like'
          }

          await this.http.post("https://us-central1-mealmate-ad158.cloudfunctions.net/updatePost", JSON.stringify(body), {
            responseType: "text"
          }).subscribe((data) => {
            console.log(data);
          }, (error) => {
            console.log(error)
          })


        }


      }).catch((err) => {
        console.log(err)
      })

    }).catch((err) => {
      console.log(err)
    })



  }


  comment(post) {

    this.actionSheetCtrl.create({
      buttons: [
        {
          text: "View All Comments",
          handler: () => {
            this.modalCtrl.create(CommentsPage, {
              "post": post
            }).present();
          }
        },
        {
          text: "New Comment",
          handler: () => {

            this.alertCtrl.create({
              title: "New Comment",
              message: "Type your comment",
              inputs: [
                {
                  name: "comment",
                  type: "text"
                }
              ],
              buttons: [
                {
                  text: "Cancel"
                },
                {
                  text: "Post",
                  handler: (data) => {

                    if (data.comment) {

                      var now = new Date().toISOString();
                      firebase.firestore().collection("comments").add({
                        content: data.comment,
                        postID: post.docID,
                        owner: firebase.auth().currentUser.uid,
                        ownerName: post.ownerName,
                        created: now
                      }).then((doc) => {
                        this.toastCtrl.create({
                          message: "Comment posted successfully.",
                          duration: 3000
                        }).present();
                      }).catch((err) => {
                        this.toastCtrl.create({
                          message: err.message,
                          duration: 3000
                        }).present();
                      })

                    }

                  }
                }
              ]
            }).present();

          }
        }
      ]
    }).present();

  }


}


