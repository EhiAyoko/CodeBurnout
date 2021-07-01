import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
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
  uuid: any;

  constructor( public  router:  Router,private uniqueDeviceID: UniqueDeviceID, public alertCtrl: AlertController,  public loadingController: LoadingController,  private db: AngularFirestore,) {
    this.uniqueDeviceID.get()
    .then((uuid: any) => {
      console.log(uuid)
      this.uuid = uuid
    } 
     )
    .catch((error: any) => console.log(error));

    this.loginData = localStorage.getItem('LoginData')
    // console.log('LoginData', this.loginData)
    if(this.loginData){
      this.router.navigate(['dashboard']);
  }
  }
  async logOut() {
    localStorage.clear();
    this.loading = await this.loadingController.create({
      message: 'Please Wait...'
     });
   this.loading.present();

    this.router.navigate(['login']);
    this.loading.dismiss();
  }
  dashboardpage(){
    this.router.navigate(['dashboard']);
  }
  SavedActivitiespage(){
    this.router.navigate(['saved-activities']);
  }
  BrowseActivitiespage(){
    this.router.navigate(['explore-activities']);
  }
  supportCircle() {
    this.router.navigate(['support-circle']);
  }
  nowsubscribe(){
    this.router.navigate(['team-activities']);
  }
  subscribe(){
    this.router.navigate(['subscribe']);
  }
  blogpage(){
    this.router.navigate(['blog']);
  }
  teamactivities(){
    this.router.navigate(['team-activities']); 0
  }
}
