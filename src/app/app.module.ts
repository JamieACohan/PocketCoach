import { ViewTrainerPage } from './../pages/view-trainer/view-trainer';
import { TrainersPage } from './../pages/trainers/trainers';
import { EditMacrosPage } from './../pages/edit-macros/edit-macros';
import { EditGoalsPage } from './../pages/edit-goals/edit-goals';
import { GoalsPage } from './../pages/goals/goals';
import { RegisterPage } from './../pages/register/register';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { JournalPage } from '../pages/journal/journal';
import { FoodResultsPage } from '../pages/food-results/food-results';
import { FoodDetailsPage } from '../pages/food-details/food-details';
import { EditJournalItemPage } from '../pages/edit-journal-item/edit-journal-item';
import { EditModalPage } from '../pages/edit-modal/edit-modal';
import { AddModalPage } from '../pages/add-modal/add-modal';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { MealOptionModalPage } from '../pages/meal-option-modal/meal-option-modal';
import { MenuPage } from '../pages/menu/menu';
import { PaymentPage } from '../pages/payment/payment';
import { TrainerhubPage } from '../pages/trainerhub/trainerhub';
import { ClientListPage } from '../pages/client-list/client-list';
import { ProgressPage } from '../pages/progress/progress';
import { AddNewWeightPage } from '../pages/add-new-weight/add-new-weight';
import { ProfilePage } from '../pages/profile/profile';
import { Camera } from '@ionic-native/camera';
import { ChatPage } from '../pages/chat/chat';
import { FeedPage } from '../pages/feed/feed';
import { RenewPaymentPage } from '../pages/renew-payment/renew-payment'
import { CommentsPage } from '../pages/comments/comments'
import { AppointmentsPage } from '../pages/appointments/appointments'
import { AddAppointmentPage } from '../pages/add-appointment/add-appointment'
import { MacroBreakdownPage } from '../pages/macro-breakdown/macro-breakdown'
import { TrainerAppsPage } from '../pages/trainer-apps/trainer-apps'
import { NgCalendarModule  } from 'ionic2-calendar';



import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule} from "angularfire2";
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FIREBASE_INFO } from './firebase.info';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { IonicStorageModule } from '@ionic/storage';
import { Stripe } from '@ionic-native/stripe/ngx';
import { Firebase } from '@ionic-native/firebase'

import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { Keyboard } from '@ionic-native/keyboard';
import { HttpModule } from '@angular/http';
import firebase from 'firebase';
import { ChartsModule } from 'ng2-charts-x';





firebase.initializeApp(FIREBASE_INFO);
firebase.firestore().settings({
  timestampsInSnapshots: true
})



@NgModule({
  declarations: [
    MyApp,
    JournalPage,
    FoodResultsPage,
    FoodDetailsPage,
    EditJournalItemPage,
    EditModalPage,
    AddModalPage,
    RegisterPage,
    ResetPasswordPage,
    MenuPage,
    MealOptionModalPage,
    GoalsPage,
    EditGoalsPage,
    EditMacrosPage,
    TrainersPage,
    ViewTrainerPage,
    PaymentPage,
    TrainerhubPage,
    ClientListPage,
    ProgressPage,
    AddNewWeightPage,
    ProfilePage,
    ChatPage,
    FeedPage,
    RenewPaymentPage,
    CommentsPage,
    AppointmentsPage,
    AddAppointmentPage,
    TrainerAppsPage,
    MacroBreakdownPage
    
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(FIREBASE_INFO),
    HttpModule,
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    AngularFirestoreModule,
    HttpClientModule,
    NgCalendarModule,
    ChartsModule
    
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    JournalPage,
    FoodResultsPage,
    FoodDetailsPage,
    EditJournalItemPage,
    EditModalPage,
    AddModalPage,
    RegisterPage,
    ResetPasswordPage,
    MenuPage,
    MealOptionModalPage,
    GoalsPage,
    EditGoalsPage,
    EditMacrosPage,
    TrainersPage,
    ViewTrainerPage,
    PaymentPage,
    TrainerhubPage,
    ClientListPage,
    ProgressPage,
    AddNewWeightPage,
    ProfilePage,
    ChatPage,
    FeedPage,
    RenewPaymentPage,
    CommentsPage,
    AppointmentsPage,
    AddAppointmentPage,
    TrainerAppsPage,
    MacroBreakdownPage

    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    Keyboard,
    Stripe,
    Camera,
    Firebase,
    AngularFirestore
  ]
})
export class AppModule {}
