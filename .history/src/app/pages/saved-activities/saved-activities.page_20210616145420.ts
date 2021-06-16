import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-saved-activities',
  templateUrl: './saved-activities.page.html',
  styleUrls: ['./saved-activities.page.scss'],
})
export class SavedActivitiesPage implements OnInit {
  public postsexpolore = [];
  public posts = [];
  public postsactivity = [];
  postId:any;
  records: { id: string; Name: string; TypeOfActivity: string; url: string; }[];
  addrecord: {type: string ; description: string; amount: number};  
  teamrecords: any[] = [];
  explorerecords: any[] = [];
  currentUser: any;
  userid: any;
  team: { id: string; Name: any; TypeOfActivity: any; url: any; }[];
  teamobject: any;
  exploreobject: any;
  explorerecordsdetails: any[];
    constructor(public postsService:HttpService,private navctrl: NavController, public afStore: AngularFirestore, private http: HttpClient, private navCtrl: NavController) {
     
  
      this.posts
      this.postsexpolore
      let currentUser = localStorage.getItem('LoginData');
      this.currentUser = JSON.parse(currentUser);
      // console.log("CurentUser",this.currentUser);
      this.userid = this.currentUser.user.uid;
  
    
   }

  ngOnInit() {
    
   
  }

  ionViewWillEnter(){
    this.explorerecords = []
    this.afStore
    .collection('Explore_activities_saved/'+this.userid+'/activity', (ref) => ref.where('uid', '==',  this.userid))
    .get()
    .subscribe((ss) => {
      let message;
      let single;
      if (ss.docs.length === 0) {
        message = 'Document not found! Try again!';
        this.exploreobject = null;
        // console.log('message', message);
      } else {
        ss.docs.forEach((doc) => {
          message = '';
          this.exploreobject = doc.data();
          this.explorerecords.push(this.exploreobject);
          
        });
        // console.log('explorerecords', this.explorerecords);
        
      }
    });
    
    this.teamrecords = []
    this.afStore
    .collection('Team_activities_saved/'+this.userid+'/activity', (ref) => ref.where('uid', '==',  this.userid))
    .get()
    .subscribe((ss) => {
      let message;
      let single;
      if (ss.docs.length === 0) {
        message = 'Document not found! Try again!';
        this.teamobject = null;
        // console.log('message', message);
      } else {
        ss.docs.forEach((doc) => {
          message = '';
          this.teamobject = doc.data();
          this.teamrecords.push(this.teamobject);
        });
        // console.log('teamrecords', this.teamrecords);
      }
    });
 
  }




postapiaittable(toggleValue) { 
  let headers = new HttpHeaders();
   headers = this.createAuthorizationHeader(headers);
  const body = toggleValue ;
  // console.log('body',body)
  this.http.put<any>('https://api.airtable.com/v0/appUBxaqmwbWUP9Rx/All%20Team%20Activities', body, { headers }).subscribe(data => {
      this.postId = data;
      // console.log('this.postAPI', this.postId)
      this.ngOnInit()
  });
}
createAuthorizationHeader(headers: HttpHeaders) {
  let _token = "keyhliJN6zZ2igddb"
  headers = headers.append('Content-Type', 'application/json');
  headers = headers.append('Authorization', `Bearer ${_token}`);
  return headers;
}

crazyEvent1(val,value){
  // console.log("vslueOfToggle",val.detail.checked)
  // console.log("vslueOfObj",value);
  let records: [];
  let obj = {
    records : [
      {
          id: value.id,
          fields: {
            Save: val.detail.checked
          }
      }
  ]
  } 
    // console.log("records",obj)
  this.postapiaittable1(obj)
  
}

postapiaittable1(toggleValue) { 
  let headers = new HttpHeaders();
   headers = this.createAuthorizationHeader(headers);
  const body = toggleValue ;
  // console.log('body',body)
  this.http.put<any>('https://api.airtable.com/v0/appB26stg0dkRk7Zb/All%20Individual%20Activities', body, { headers }).subscribe(data => {
      this.postId = data;
      // console.log('this.postAPI', this.postId)
  });
}
createAuthorizationHeader1(headers: HttpHeaders) {
  let _token = "keyhliJN6zZ2igddb"
  headers = headers.append('Content-Type', 'application/json');
  headers = headers.append('Authorization', `Bearer ${_token}`);
  return headers;
}
savedetailsexp(item){
  // console.log('mmmmmmm', item)
  let navigationExtras: NavigationExtras = {
    state: {
      item
    },
  };
  this.navCtrl.navigateForward('save-details-explore', navigationExtras);
}
savedetailsteam(item){
  let navigationExtras: NavigationExtras = {
    state: {
      item
    },
  };
  this.navCtrl.navigateForward('save-details', navigationExtras);
}
backbtn(){
  this.navctrl.navigateBack('dashboard')
}
}
