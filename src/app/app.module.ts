import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { IonicStorageModule } from '@ionic/storage';

import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

import { MyApp } from './app.component';

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
    CrudIonic
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    BoutonIonicPage,
    ItemDetailsPage,
    ListPage,
    SearchbarIonic,
    CrudIonic
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
