import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';

import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { BoutonIonicPage } from '../pages/bouton-ionic/bouton-ionic';
import { SearchbarIonic } from '../pages/searchbar-ionic/searchbar-ionic';
import { CrudIonic } from '../pages/crud-ionic/crud-ionic';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    private storage: Storage,
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {

    // set a key/value
    storage.set('name', 'Max');

    // Or to get a key/value pair
    storage.get('age').then((val) => {
      console.log('Your age is', val);
    });
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'My first Buttons', component: BoutonIonicPage },
      { title: 'My first Searchbar', component: SearchbarIonic },
      { title: 'My first crud', component: CrudIonic },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
