import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import {
  AngularFirestore
} from '@angular/fire/firestore';



@IonicPage()
@Component({
  selector: 'page-add-new-weight',
  templateUrl: 'add-new-weight.html',
})
export class AddNewWeightPage {

  myForm;
  weight: number;
  date: string;
  progressData: any[] = [];
  goalData: any[] = [];
  users: any[] = [];
  token: any[] = [];
  token1: any[] = [];
  docID: any;
  image: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
    private camara: Camera, public http: HttpClient, public fireStore: AngularFirestore) {

    this.getProgressData();
    this.getGoalDataForClient();
    this.getUserData();
    this.getTrainerID();
    this.getGoalData();

    this.myForm = this.formBuilder.group({
      weight: new FormControl('', Validators.compose([
        Validators.required
      ])),
      date: new FormControl('', Validators.compose([
        Validators.required
      ])),
      photo: new FormControl('', Validators.compose([
        Validators.required
      ])),

    });
  }

  async getGoalData() {


    await this.fireStore.doc<any>(`/users/${firebase.auth().currentUser.uid}/goals/${firebase.auth().currentUser.uid}`).valueChanges().subscribe((goals) => {

      this.getCurrentWeight(goals)

    });

  }


  getCurrentWeight(goals) {

    if (goals == undefined) {
      console.log("Empty List")
      this.weight = 0;
    }
    else {
      console.log("List contains data")
      this.weight = goals.currentWeight;
    }



  }


  splitTimestamp() {
    // Remove time from time stamp and keeping date
    var todaysDate = new Date();
    var todaysDateString = String(todaysDate);
    var todaysDateSplit = todaysDateString.split(' ').slice(0, 4).join(' ');

    return todaysDateSplit;
  }

  async getProgressData() {
    this.docID = this.navParams.get('docID');

    await firebase.firestore().collection("users").doc(this.docID).collection('progress')
      .get()
      .then((docs) => {

        docs.forEach((doc) => {
          this.progressData.push(doc);
        })

        console.log(this.progressData)

      }).catch((err) => {
        console.log(err)
      })
  }

  async getGoalDataForClient() {
    await firebase.firestore().collection("users").doc(this.docID).collection('goals')
      .where("UID", "==", firebase.auth().currentUser.uid)
      .get()
      .then((docs) => {

        docs.forEach((doc) => {
          this.goalData.push(doc);
        })


      }).catch((err) => {
        console.log(err)
      })

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

  }

  getTrainerID() {
    var trainerID;

    for (let user of this.users) {
      trainerID = user.data().trainerID;
      console.log(trainerID);
    }

    return trainerID;
  }




  updateWeight() {

    let body = {
      trainer: this.getTrainerID()
    }

    this.http.post("https://us-central1-mealmate-ad158.cloudfunctions.net/updateWeight", JSON.stringify(body), {
      responseType: "text"
    }).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log(error)
    })


    if (this.progressData.length == 0) {
      console.log("Reaches here");
      firebase.firestore().collection("users").doc(this.docID).collection('progress').add({
        currentWeight: Number(this.weight),
        weightUpdated: this.splitTimestamp(),
        timestamp: firebase.firestore.FieldValue.serverTimestamp()

      }).then((doc) => {
        console.log(doc)

        if (this.image) {
          this.upload(this.docID, doc.id)
        }
      }).catch((err) => {
        console.log(err)
      })

      if (this.goalData.length == 0) {

        firebase.firestore().collection("users").doc(this.docID).collection('goals').doc(firebase.auth().currentUser.uid).set({
          currentWeight: Number(this.weight)


        }).then((doc) => {
          console.log(doc)
        }).catch((err) => {
          console.log(err)
        })
      }
      else {
        firebase.firestore().collection("users").doc(this.docID).collection('goals').doc(firebase.auth().currentUser.uid).update({
          currentWeight: Number(this.weight)


        }).then((doc) => {
          console.log(doc)
        }).catch((err) => {
          console.log(err)
        })

      }
    }
    else {
      var match = this.progressData.find(e => e.data().weightUpdated === this.splitTimestamp());
      console.log(match);
      if (match == null) {
        console.log("Not Found");
        firebase.firestore().collection("users").doc(this.docID).collection('progress').add({
          currentWeight: Number(this.weight),
          weightUpdated: this.splitTimestamp(),
          timestamp: firebase.firestore.FieldValue.serverTimestamp()

        }).then((doc) => {
          console.log(doc)

          if (this.image) {
            this.upload(this.docID, match.id)
          }
        }).catch((err) => {
          console.log(err)
        })


        if (this.goalData.length == 0) {
          firebase.firestore().collection("users").doc(this.docID).collection('goals').doc(firebase.auth().currentUser.uid).set({
            currentWeight: Number(this.weight)


          }).then((doc) => {
            console.log(doc)
          }).catch((err) => {
            console.log(err)
          })
        }
        else {

          firebase.firestore().collection("users").doc(this.docID).collection('goals').doc(firebase.auth().currentUser.uid).update({
            currentWeight: Number(this.weight)


          }).then((doc) => {
            console.log(doc)
          }).catch((err) => {
            console.log(err)
          })
        }

      }
      else {
        console.log("Found");
        firebase.firestore().collection("users").doc(this.docID).collection('progress').doc(match.id).update({
          currentWeight: Number(this.weight),
          weightUpdated: this.splitTimestamp(),
          timestamp: firebase.firestore.FieldValue.serverTimestamp()


        }).then((doc) => {
          console.log(doc)

          if (this.image) {
            this.upload(this.docID, match.id)
          }
        }).catch((err) => {
          console.log(err)
        })

        if (this.goalData.length == 0) {

          firebase.firestore().collection("users").doc(this.docID).collection('goals').doc(firebase.auth().currentUser.uid).set({
            currentWeight: Number(this.weight)


          }).then((doc) => {
            console.log(doc)
          }).catch((err) => {
            console.log(err)
          })
        }
        else {
          firebase.firestore().collection("users").doc(this.docID).collection('goals').doc(firebase.auth().currentUser.uid).update({
            currentWeight: Number(this.weight)


          }).then((doc) => {
            console.log(doc)
          }).catch((err) => {
            console.log(err)
          })
        }

      }
    }






    this.navCtrl.pop();
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

      this.image = "data:image/png;base64," + toBase64String;

    }).catch((err) => {
      console.log(err)
    })
  }

  upload(clientDocID: string, progressDocId: string) {

    return new Promise((resolve, reject) => {
      let ref = firebase.storage().ref("progressPictures/" + clientDocID);

      let uploadTask = ref.putString(this.image.split(',')[1], "base64");

      uploadTask.on("state_changed", (taskSnapshot) => {
        console.log(taskSnapshot)
      }, (error) => {
        console.log(error)
      }, () => {
        console.log("The upload is completed!");

        uploadTask.snapshot.ref.getDownloadURL().then((url) => {

          firebase.firestore().collection("users").doc(clientDocID).collection('progress').doc(progressDocId).update({
            image: url
          }).then(() => {
            resolve()
          }).catch((err) => {
            reject()
          })
        }).catch((err) => {
          reject()
        })

      })
    })

  }


}


