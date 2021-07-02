import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthicationService } from 'src/app/services/auth/authication.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-explore-details',
  templateUrl: './explore-details.page.html',
  styleUrls: ['./explore-details.page.scss'],
})
export class ExploreDetailsPage implements OnInit {

  brandsdetails: any = '';
  postId:any;
  userid: any;
  currentUser: any;
  addrecord: {type: string ; description: string; amount: number}; 
  records: { id: string; Name: string; TypeOfActivity: string; url: string; }[];
  saveActivity: boolean = false;
  constructor(private socialSharing: SocialSharing,
    private navctrl: NavController, 
    private router: Router, 
    private http: HttpClient, 
    private authpostservice: AuthicationService, 
    public afStore: AngularFirestore,
    public alertController: AlertController,
    ) { 
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

sShare(postimg, brandsdetails){
  var options = {
    message: 'Code Burnout app', // not supported on some apps (Facebook, Instagram)
    subject: brandsdetails.fields.Name, // fi. for email
    url: postimg.url,
    chooserTitle: brandsdetails.fields.Notes, // Android only, you can override the default share sheet title
    
  };
 
  this.socialSharing.shareWithOptions(options);
}

  ngOnInit() { 
    // console.log('this.brandsdetails.fields.Name',this.brandsdetails.fields.Name)
  this.addrecord = {type :'', description :'', amount: null}    
  this.afStore.collection('/Explore_activities_saved/').snapshotChanges().subscribe(res=>{
  // console.log('res',res)

    if(res){
      this.records = res.map(e=>{
        return{
          id: e.payload.doc.id,
          Name: e.payload.doc.data()['Name'],
          TypeOfActivity: e.payload.doc.data()['Notes'],
          url: e.payload.doc.data()['url']
        }
      })   
    }  
  })
  // console.log('this.records',this.records)
  }
  
  crazyEvent(val, value, postimg){
    // console.log("vslueOfToggle",val.detail.checked)
    // console.log("vslueOfObj",value);
    // console.log("fff",postimg);
    let records: [];
    let obj = {
      records : [
        {
            id: value.id,
            fields: {
              Save: val.detail.checked,
              Name: this.brandsdetails.fields.Name,
              Notes: this.brandsdetails.fields.Notes,
              Featuredphoto:[
                {
                  url: postimg.url,
                }
              ],
              TypeOfActivity: this.brandsdetails.fields.TypeOfActivity,
            }
        }
    ]
    } 
      // console.log("records",obj)
    this.postapiaittable(obj)
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

firebaseEvent(val,value, postimg, postvideo){

  if(localStorage.getItem('LoginData')){
      let currentUser = localStorage.getItem('LoginData');
      this.currentUser = JSON.parse(currentUser);
      console.log("CurentUser", this.currentUser);
      this.userid = this.currentUser.user.uid;
      console.log("this.userid", this.userid);

  if(val.detail.checked === true){
    let addrecord = {}
    addrecord['id'] = this.brandsdetails?.id
    if(this.brandsdetails &&  this.brandsdetails?.fields.Name !=undefined){
      addrecord['Name'] =  this.brandsdetails?.fields?.Name
     }
     addrecord['uid'] = this.userid
     if(this.brandsdetails &&  this.brandsdetails?.fields.Notes !=undefined){
      addrecord['Notes'] =  this.brandsdetails?.fields?.Notes
     }
     if(this.brandsdetails &&  this.brandsdetails?.fields.TypeOfActivity !=undefined){
      addrecord['TypeOfActivity'] =  this.brandsdetails?.fields?.TypeOfActivity
     }
     if(this.brandsdetails &&  postimg?.url !=undefined){
      addrecord['url'] =  postimg?.url
     }
     if (this.brandsdetails.fields.Video != undefined) {
      addrecord['Video'] = this.brandsdetails?.fields?.Video[0]?.url
  // console.log('video', this.brandsdetails?.fields?.Video[0]?.url)
    }
   
    // console.log(addrecord)
    this.afStore
      .collection('Explore_activities_saved/' + this.userid + '/activity')
      .doc(this.brandsdetails.id)
      .set(addrecord).then(()=>{
        this.addrecord = {type :'', description :'', amount: null} 
        // this.afStore.collection('Records').doc().set({id: '' , name:'hamza'})
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

DeleteRecord(id){
  this.afStore.doc('/Explore_activities_saved/'+id).delete()
}

async sSShare(brandsdetails,postimg){
  // console.log('brandsdetails', brandsdetails)
  var options = {
    message: 'Activiy Name: ' + this.brandsdetails.fields.Name, // not supported on some apps (Facebook, Instagram)
    text: brandsdetails.fields.description, // fi. for email
    url: 'code burnout app: ' + 'https://apps.apple.com/us/app/code-burnout/id1561832368',
    chooserTitle: 'code burnout', // Android only, you can override the default share sheet title
    
  };
    await  this.socialSharing.shareWithOptions(options);
  // await  this.socialSharing.share('this is msg', 'subject', 'url').then().catch();

}

}
