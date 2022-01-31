import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { User } from '../../Models/user';
import firebase from 'firebase';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import { RenewPaymentPage } from '../renew-payment/renew-payment';
import {
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {


  //form validation_messages
  validation_messages = {
    'displayName': [
      { type: 'required', message: 'Name is required.' },
      { type: 'minLength', message: 'Username must be at least 6 characters long.' },
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Invalid email address.' },
    ],
    'firstName': [
      { type: 'minLength', message: 'First name must be at least 2 characters long' },
      { type: 'required', message: 'Field name is required.' }
    ],
    'surname': [
      { type: 'minLength', message: 'Surname must be at least 2 characters long.' },
      { type: 'required', message: 'Field is required.' }
    ],
    'sex': [

      { type: 'required', message: 'Field is required.' }
    ],
    'age': [

      { type: 'required', message: 'Age is required.' },
      { type: 'min', message: 'Age not valid.' },
      { type: 'max', message: 'Not valid' }
    ],
    'country': [

      { type: 'required', message: 'Field is required.' }
    ],
    'city': [

      { type: 'required', message: 'Field is required.' }
    ],
    'certification': [

      { type: 'required', message: 'Field is required.' }
    ]
    ,
    'experience': [

      { type: 'required', message: 'Field is required.' },
      { type: 'min', message: 'Not valid' },
      { type: 'max', message: 'Not valid' }
    ],
    'specialties': [

      { type: 'required', message: 'Field is required.' }
    ]
    ,
    'price': [

      { type: 'required', message: 'Field is required.' },
      { type: 'min', message: 'Not valid' },
      { type: 'max', message: 'Not valid' }
    ],
    'duration': [

      { type: 'required', message: 'Field is required.' },
      { type: 'min', message: 'Not valid' },
      { type: 'max', message: 'Not valid' }
    ],
    'maxClients': [

      { type: 'required', message: 'Field is required.' },
      { type: 'min', message: 'Not valid' },
      { type: 'max', message: 'Not valid' }
    ]
  }

  myForm;
  subForm;
  achiForm;
  user = {} as User;
  users: any;
  image: any;
  subExpiry: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public fireStore: AngularFirestore,
    private camara: Camera, public http: HttpClient, private modal: ModalController, public formBuilder: FormBuilder, private toastCtrl: ToastController) {
    // this.assignData();
    // this.getUserData();
    this.assignData();

    this.myForm = this.formBuilder.group({
      displayName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      firstName: new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.required
      ])),
      surname: new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.required
      ])),
      age: new FormControl('', Validators.compose([

        Validators.min(1),
        Validators.max(150),
        Validators.required
      ])),
      country: new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.required
      ])),
      city: new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.required
      ]))
    });

    // Achievements form 

    this.achiForm = this.formBuilder.group({
      certification: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(30),
      ])),
      experience: new FormControl('', Validators.compose([
        Validators.min(0),
        Validators.required
      ])),
      specialties: new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(40),
        Validators.required
      ]))
    });

    // Sub form 

    this.subForm = this.formBuilder.group({
      price: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(0),
        Validators.max(500)
      ])),
      duration: new FormControl('', Validators.compose([
        Validators.min(7),
        Validators.max(365),
        Validators.required
      ])),
      maxClients: new FormControl('', Validators.compose([
        Validators.min(1),
        Validators.max(500),
        Validators.required
      ]))
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  openRenewModal() {

    var date = new Date(this.user.expiryDate);

    const renewModal = this.modal.create(RenewPaymentPage, { newExpiryDate: this.addDays(date, this.user.duration), Price: this.user.price, Duration: this.user.duration });

    renewModal.present();


  }


  async assignData() {

    await this.storage.get('userDocID').then((docID) => {
      this.users = this.fireStore.doc<any>(`/users/` + docID).valueChanges().subscribe((profile) => {
        this.user.displayName = profile.displayName;
        this.user.firstName = profile.firstName;
        this.user.surname = profile.surname;
        this.user.age = profile.age;
        this.user.city = profile.city;
        this.user.country = profile.country;
        this.user.email = profile.email;
        this.user.role = profile.role;
        this.user.price = profile.price;
        this.user.clientCount = profile.clientCount
        this.user.maxClients = profile.maxClients;
        this.user.experience = profile.experience;
        this.user.specialties = profile.specialties;
        this.user.certification = profile.certification;
        this.user.image = profile.image;
        this.user.expiryDate = profile.expiryDate;
        this.user.duration = profile.duration;
        this.user.hasPaid = profile.hasPaid;
        // this.user.trainerId = profile.trainerID;
        var trainerUID = profile.trainerID;


        if (profile.role == 1 && profile.hasPaid == true) {
          this.getTrainer(trainerUID);
          this.subscriptionExpiry(profile.expiryDate);
        }

      });
    });


  }

  async getTrainer(trainerUID) {

    await firebase.firestore().collection("users")
      .where("UID", "==", trainerUID)
      .get()
      .then((docs) => {

        docs.forEach((doc) => {

          this.user.duration = doc.data().duration;
          this.user.price = doc.data().price;

        })


      }).catch((err) => {
        console.log(err)
      })
  }

  subscriptionExpiry(days) {

    var today = new Date();
    var expiry = new Date(days);

    var diff = expiry.valueOf() - today.valueOf();
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    this.subExpiry = diffDays;
  }


  addDays(date: Date, days: number) {
    date.setDate(date.getDate() + days);

    return date.toDateString().split(' ').slice(1, 4).join(' ');
  }

  renewSub() {
    this.storage.get('userDocID').then((docID) => {

      var date = new Date(this.user.expiryDate);
      this.addDays(date, this.user.duration)

      firebase.firestore().collection("users").doc(docID).update({

        expiryDate: this.addDays(date, this.user.duration)


      }).then((doc) => {
        console.log(doc)

      }).catch((err) => {
        console.log(err)
      })
    });
  }


  // Updating Profile
  save() {

    let toast = this.toastCtrl.create({
      message: "Profile updated."
    });
    this.storage.get('userDocID').then((docID) => {
      if (this.user.role == 1) {



        firebase.firestore().collection("users").doc(docID).update({
          displayName: this.user.displayName,
          firstName: this.user.firstName,
          surname: this.user.surname,
          age: Number(this.user.age),
          email: this.user.email,
          country: this.user.country,
          city: this.user.city


        }).then((doc: any) => {
          console.log(doc)
          if (this.image) {
            this.upload()
          }

          // if (this.user.image) {
          //   firebase.firestore().collection("users").doc(this.user.trainerId).collection("clientList").doc(firebase.auth().currentUser.uid).update({
          //     image: this.user.image,

          //   }).then((doc) => {
          //     console.log(doc)
          //   }).catch((err) => {
          //     console.log(err)
          //   })
          // }


        }).catch((err) => {
          console.log(err)
        })
      }
      else {
        if (this.user.clientCount >= this.user.maxClients) {
          this.user.isAvailable = false;
          this.user.spacesLeft = this.user.maxClients - this.user.clientCount;

          firebase.firestore().collection("users").doc(docID).update({
            displayName: this.user.displayName,
            firstName: this.user.firstName,
            surname: this.user.surname,
            age: Number(this.user.age),
            email: this.user.email,
            country: this.user.country,
            city: this.user.city,
            price: Number(this.user.price),
            clientCount: Number(this.user.clientCount),
            maxClients: Number(this.user.maxClients),
            spacesLeft: Number(this.user.spacesLeft),
            isAvailable: this.user.isAvailable,
            specialties: this.user.specialties,
            experience: Number(this.user.experience),
            certification: this.user.certification,
            duration: Number(this.user.duration)


          }).then((doc) => {
            console.log(doc)
            if (this.image) {
              this.upload()
            }
          }).catch((err) => {
            console.log(err)
          })


        }
        else {
          this.user.isAvailable = true;
          this.user.spacesLeft = this.user.maxClients - this.user.clientCount;

          firebase.firestore().collection("users").doc(docID).update({
            displayName: this.user.displayName,
            firstName: this.user.firstName,
            surname: this.user.surname,
            age: Number(this.user.age),
            email: this.user.email,
            country: this.user.country,
            city: this.user.city,
            price: Number(this.user.price),
            clientCount: Number(this.user.clientCount),
            maxClients: Number(this.user.maxClients),
            spacesLeft: Number(this.user.spacesLeft),
            isAvailable: this.user.isAvailable,
            specialties: this.user.specialties,
            experience: Number(this.user.experience),
            certification: this.user.certification,
            duration: Number(this.user.duration)


          }).then((doc) => {
            console.log(doc)
            if (this.image) {
              this.upload()
            }
          }).catch((err) => {
            console.log(err)
          })

        }



      }


    });

    toast.present();
    setTimeout(() => {
      toast.dismiss();
    }, 5000);
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

  upload() {
    this.storage.get('userDocID').then((docID) => {
      return new Promise((resolve, reject) => {

        let ref = firebase.storage().ref("profilePictures/" + docID);

        let uploadTask = ref.putString(this.image.split(',')[1], "base64");

        uploadTask.on("state_changed", (taskSnapshot) => {
          console.log(taskSnapshot)
        }, (error) => {
          console.log(error)
        }, () => {
          console.log("The upload is completed!");

          uploadTask.snapshot.ref.getDownloadURL().then((url) => {

            firebase.firestore().collection("users").doc(docID).update({
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
    });
  }

  cancelSub() {
    firebase.firestore().collection("users")
      .where("UID", "==", firebase.auth().currentUser.uid)
      .get()

      .then((docs: any) => {



        docs.forEach((doc: any) => {


          // Get trainer related to client
          firebase.firestore().collection("users").where("UID", "==", doc.data().trainerID).get()
            .then((docs2) => {

              docs2.forEach((doc2: any) => {
                const isAvailable: any = doc2.data().isAvailable;
                const spacesLeft = doc2.data().spacesLeft + 1;
                const clientCount = doc2.data().clientCount - 1;
                if (isAvailable === false) {
                  isAvailable === true;
                }
                else {
                  isAvailable === isAvailable;
                }




                firebase.firestore().collection("users").doc(doc2.id).update({
                  isAvailable: isAvailable,
                  spacesLeft: spacesLeft,
                  clientCount: clientCount


                }).then(() => {

                  // Delete client from clientList
                  firebase.firestore().collection("users").doc(doc2.id).collection("clientList").doc(doc.data().UID).delete()
                    .then(() => {
                      // Delete Trainer details from client table
                      firebase.firestore().collection("users").doc(doc.id).update({
                        hasPaid: false,
                        trainerName: "",
                        trainerID: "",
                        expiryDate: ""

                      }).then(() => {

                        // Delete Previous Messages 

                        firebase.firestore().collection("chat").doc(doc.data().UID).collection("messages").get()
                          .then((docs3: any) => {

                            docs3.forEach((doc3: any) => {

                              firebase.firestore().collection("chat").doc(doc.data().UID).collection('messages').doc(doc3.id).delete()
                                .then(() => {
                                  firebase.firestore().collection("chat").doc(doc.data().UID).delete()
                                    .catch((err) => {
                                      console.log(err)
                                    })
                                }).catch((err) => {
                                  console.log(err)
                                })


                            })
                          }).catch((err) => {
                            console.log(err)
                          })



                      }).catch((err) => {

                        console.log(err)

                      })

                    }).catch((err) => {
                      console.log(err)
                    })

                }).catch((err) => {

                  console.log(err)

                })





              })



            }).catch((err) => {
              console.log(err)
            })



        })

      }).catch((err) => {

        console.log(err)

      })


    // Delete appointments
    firebase.firestore().collection("appointments").where("clientID", "==", firebase.auth().currentUser.uid).get()
      .then((docs: any) => {

        docs.forEach((doc: any) => {

          firebase.firestore().collection("appointments").doc(doc.id).delete()
            .catch((err) => {
              console.log(err)
            })


        })
      }).catch((err) => {
        console.log(err)
      })


    // Delete TrainerHub collection
    firebase.firestore().collection("trainerHub").where("clientUID", "==", firebase.auth().currentUser.uid).get()
      .then((docs: any) => {

        docs.forEach((doc: any) => {

          firebase.firestore().collection("trainerHub").doc(doc.id).delete()
            .catch((err) => {
              console.log(err)
            })


        })
      }).catch((err) => {
        console.log(err)
      })
  }



}
