import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import de angularfire2
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


/**
 * Generated class for the CrudFirebasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crud-firebase',
  templateUrl: 'crud-firebase.html',
})
export class CrudFirebasePage {

  songs: AngularFireList<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, afDatabase: AngularFireDatabase) {

    this.songs = afDatabase.list('/songs').valueChanges();

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CrudFirebasePage');
  }

}
