import { Component } from '@angular/core';

import { AngularFireAuth } from  "@angular/fire/auth";
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  todayDate = new Date().getTime();
  user: any;
  loginData: any
  subscription:  any;
  public posts: Object[] = [];
  loading: any;
  
  constructor( public  router:  Router, ) {
    this.loginData = localStorage.getItem('LoginData')
    console.log('LoginData', this.loginData)
    if(this.loginData){
      this.router.navigate(['dashboard']);
  }
  }
}
