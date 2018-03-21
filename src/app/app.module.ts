import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { IonicStorageModule } from '@ionic/storage';

import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

import { MyApp } from './app.component';

// partie firebase //

import { CrudFirebasePage } from '../pages/crud-firebase/crud-firebase';
 
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
 
 
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyDTH57O0oEydw4BowO1_JEO5Lk5dQuas0s",
  authDomain: "crud-ionic-firebase-dad82.firebaseapp.com",
  databaseURL: "https://crud-ionic-firebase-dad82.firebaseio.com",
  projectId: "crud-ionic-firebase-dad82",
  storageBucket: "crud-ionic-firebase-dad82.appspot.com",
  messagingSenderId: "314258715391"

};
AngularFireModule.initializeApp(firebaseConfig);


// fin de la partie fire base //

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { BoutonIonicPage } from '../pages/bouton-ionic/bouton-ionic';
import { SearchbarIonic } from '../pages/searchbar-ionic/searchbar-ionic';
import { CrudIonic } from '../pages/crud-ionic/crud-ionic';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    BoutonIonicPage,
    ItemDetailsPage,
    ListPage,
    SearchbarIonic,
    CrudIonic,
    CrudFirebasePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    BoutonIonicPage,
    ItemDetailsPage,
    ListPage,
    SearchbarIonic,
    CrudIonic,
    CrudFirebasePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    Toast
  ]
})
export class AppModule {}
