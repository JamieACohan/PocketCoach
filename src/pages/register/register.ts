import { Roles } from './../../Models/user';
import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController
} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { User } from '../../Models/user';
import firebase from 'firebase';
import { Md5 } from 'ts-md5/dist/md5';
import { UUID } from 'angular2-uuid';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [Md5]

})
export class RegisterPage {

  user = {} as User;


  myForm;
  firebase_id = { firebase_id_var: '' };

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
    'password': [
      { type: 'minLength', message: 'Password must be at least 6 characters long.' },
      { type: 'pattern', message: 'Your Password must contain Upercase, Lowercase numbers.' },
      { type: 'required', message: 'Password is required.' }
    ],
    'firstName': [
      { type: 'minLength', message: 'First name must be at least 2 characters long' },
      { type: 'required', message: 'First name is required.' }
    ],
    'surname': [
      { type: 'minLength', message: 'Surname must be at least 2 characters long.' },
      { type: 'required', message: 'Surname is required.' }
    ],
    'sex': [

      { type: 'required', message: 'Sex is required.' }
    ],
    'age': [

      { type: 'required', message: 'Age is required.' }
    ],
    'country': [

      { type: 'required', message: 'Country is required.' }
    ],
    'city': [

      { type: 'required', message: 'City is required.' }
    ]
  }

  public type = 'password';
  public showPass = false;

  time: any;
  hash: any;
  uuid: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fAuth: AngularFireAuth,
    public formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private _md5: Md5) {

    this.time = new Date();
    this.hash = Md5.hashStr(this.time);//unique id
    this.uuid = UUID.UUID();

    this.user.role = 1;
    this.user.sex = "Male";

    this.myForm = this.formBuilder.group({
      displayName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
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
      sex: new FormControl('', Validators.compose([


        Validators.required
      ])),
      age: new FormControl('', Validators.compose([

        Validators.min(1),
        Validators.required
      ])),
      role: new FormControl('', Validators.compose([
        // Validators.minLength(6),
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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register() {
    try {
      var r = await this.fAuth.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      ).then((newUser: any) => {
        console.log('email', this.user.email);
        //console.log(newUser.user.uid)
        console.log("Successfully registered!");

        var user = this.fAuth.auth.currentUser;


        // Setting up user tables in firebase based on roles 
        // Role 1 = Client
        if (this.user.role == 1) {
          firebase.firestore().collection("users").doc(this.fAuth.auth.currentUser.uid).set({
            displayName: this.user.displayName,
            firstName: this.user.firstName,
            surname: this.user.surname,
            age: Number(this.user.age),
            email: this.user.email.toLowerCase(),
            role: Number(this.user.role),
            sex: this.user.sex,
            country: this.user.country,
            city: this.user.city,
            hasPaid: false,
            UID: this.fAuth.auth.currentUser.uid,
            image: "",
            trainerID: "",
            trainerName: ""



          }).then((doc) => {
            console.log(doc)
          }).catch((err) => {
            console.log(err)
          })
        }
        // Role 2 == Trainer
        else {
          firebase.firestore().collection("users").doc(this.fAuth.auth.currentUser.uid).set({
            UID: this.fAuth.auth.currentUser.uid,
            displayName: this.user.displayName,
            firstName: this.user.firstName,
            surname: this.user.surname,
            age: Number(this.user.age),
            email: this.user.email.toLowerCase(),
            role: Number(this.user.role),
            sex: this.user.sex,
            country: this.user.country,
            city: this.user.city,
            specialties: "",
            certification: "",
            experience: Number(0),
            price: Number(0),
            maxClients: Number(0),
            clientCount: Number(0),
            isAvailable: false,
            spacesLeft: Number(0),
            duration: Number(0),
            watchList: [],
            watchers: Number(0),
            image: ""



          }).then((doc) => {
            console.log(doc)
          }).catch((err) => {
            console.log(err)
          })
        }

        // Setting up trainer hub




        this.presentToast();
        this.presentLoadingText();



      });

    } catch (error) {
      if (error.code !== "") {
        if (error.code == "auth/email-already-in-use") {
          let alert = this.alertCtrl.create({
            title: 'Email Exists',
            subTitle: 'The email you entered is already registered.',
            buttons: ['Retry']
          });

          alert.present();
        }
        console.error(error);
      }
    }


  }

  gotologin() {
    this.navCtrl.setRoot(LoginPage)
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'SignUp successfully',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  presentLoadingText() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait a moment...'
    });

    loading.present();

    setTimeout(() => {
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
    this.navCtrl.push(LoginPage);

  }

  showPassword() {
    this.showPass = !this.showPass;

    if (this.showPass) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

}
