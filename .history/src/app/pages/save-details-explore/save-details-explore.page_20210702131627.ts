import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthicationService } from 'src/app/services/auth/authication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-save-details-explore',
  templateUrl: './save-details-explore.page.html',
  styleUrls: ['./save-details-explore.page.scss'],
})
export class SaveDetailsExplorePage implements OnInit {

  saveActivity: boolean = false;
  brandsdetails: any = '';
  postId:any;
  brandsdetailsexp: any;
  userid: any;
  currentUser: any;
    constructor( public alertController: AlertController, private router: Router, private socialSharing: SocialSharing, private navctrl: NavController, public afStore: AngularFirestore, private http: HttpClient,private authpostservice: AuthicationService) { 
    if(localStorage.getItem('LoginData') != null){
      let currentUser = localStorage.getItem('LoginData');
      this.currentUser = JSON.parse(currentUser);
      console.log("CurentUser", this.currentUser);
      this.userid = this.currentUser.user.uid;
      console.log("this.userid", this.userid);
    }
    
    const navigation = this.router.getCurrentNavigation();
		const state = navigation.extras.state as {
      item,
    };
    if(state!=undefined){
    this.brandsdetails =state.item;
    // console.log(this.brandsdetails);

    this.authpostservice.exploreActivity(this.userid, this.brandsdetails.id)
    .then(doc => {
      // console.log('doc', doc)
      if (doc.exists) {
        // console.log("Document data:", doc.data());
        this.saveActivity = true;
      } else {
        this.saveActivity = false;
      }
      // console.log('this is fir data', this.brandsdetails);
    });
    }
    
  }
  ngOnInit() {
    this.brandsdetails
  }
  async loadCall(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'If you want to use <strong>Save Activity</strong>, you need to login',
      backdropDismiss: false ,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.router.navigateByUrl('/explore-activities');
          }
        }, {
          text: 'Login',
          handler: () => {
            // this.router.navigateByUrl('/login');
             this.navctrl.navigateForward('login');
          }
        }
      ]
    });
    await alert.present();
  }
  
postapiaittable(toggleValue) { 
  let headers = new HttpHeaders();
   headers = this.createAuthorizationHeader(headers);
  const body = toggleValue ;
  // console.log('body',body)
  this.http.put<any>('https://api.airtable.com/v0/appB26stg0dkRk7Zb/All%20Individual%20Activities', body, { headers }).subscribe(data => {
      this.postId = data;
      // console.log('this.postAPI', this.postId)
  });
}
createAuthorizationHeader(headers: HttpHeaders) {
  let _token = "keyhliJN6zZ2igddb"
  headers = headers.append('Content-Type', 'application/json');
  headers = headers.append('Authorization', `Bearer ${_token}`);
  return headers;
}

firebaseEvent(val,value){
  if(localStorage.getItem('LoginData')){
    let currentUser = localStorage.getItem('LoginData');
    this.currentUser = JSON.parse(currentUser);
    console.log("CurentUser", this.currentUser);
    this.userid = this.currentUser.user.uid;
    console.log("this.userid", this.userid);

  if(val.detail.checked === true){
    let addrecord = {}
    addrecord['id'] = this.brandsdetails?.id
    if(this.brandsdetails &&  this.brandsdetails?.Name !=undefined){
      addrecord['Name'] =  this.brandsdetails?.Name
     }
     addrecord['uid'] = this.userid
     if(this.brandsdetails &&  this.brandsdetails?.Notes !=undefined){
      addrecord['Notes'] =  this.brandsdetails?.Notes
     }
     if(this.brandsdetails &&  this.brandsdetails?.TypeOfActivity !=undefined){
      addrecord['TypeOfActivity'] =  this.brandsdetails?.TypeOfActivity
     }
     if(this.brandsdetails &&  this.brandsdetails?.url !=undefined){
      addrecord['url'] =  this.brandsdetails?.url
     }
     if (this.brandsdetails &&  this.brandsdetails?.Video !=undefined) {
      addrecord['Video'] = this.brandsdetails?.Video
  // console.log('video', this.brandsdetails?.Video)
    }
   
    // console.log(addrecord)
    this.afStore
      .collection('Explore_activities_saved/' + this.userid + '/activity')
      .doc(this.brandsdetails.id)
      .set(addrecord).then(()=>{
      }); 
  }
  else{
    if(val.detail.checked === false){
      this.afStore.doc('/Explore_activities_saved/' + this.userid + '/activity/' + value.id).delete()
    }
  }
}else if(this.userid == undefined){ 
  this.loadCall()
 }
 this.brandsdetails
}

backbtn(){
  this.navctrl.navigateBack('saved-activities')
}
async sSShare(brandsdetails,postimg){
  // console.log('brandsdetails', brandsdetails)
  var options = {
    message: 'Activiy Name: ' + this.brandsdetails.Name, // not supported on some apps (Facebook, Instagram)
    text: brandsdetails.description, // fi. for email
    url: 'code burnout app: ' + 'https://apps.apple.com/us/app/code-burnout/id1561832368',
    chooserTitle: 'code burnout', // Android only, you can override the default share sheet title
    
  };
    await  this.socialSharing.shareWithOptions(options);
  // await  this.socialSharing.share('this is msg', 'subject', 'url').then().catch();

}
}
