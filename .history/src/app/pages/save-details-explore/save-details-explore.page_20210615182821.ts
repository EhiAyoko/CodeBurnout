import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthicationService } from 'src/app/services/auth/authication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-save-details-explore',
  templateUrl: './save-details-explore.page.html',
  styleUrls: ['./save-details-explore.page.scss'],
})
export class SaveDetailsExplorePage implements OnInit {

  
  brandsdetails: any = '';
  postId:any;
  brandsdetailsexp: any;
  userid: any;
  currentUser: any;
  constructor(private router: Router,private navctrl: NavController, public afStore: AngularFirestore, private http: HttpClient,private authpostservice: AuthicationService) { 
    let currentUser = localStorage.getItem('LoginData');
    this.currentUser = JSON.parse(currentUser);
    console.log("CurentUser",this.currentUser);
    this.userid = this.currentUser.user.uid;
    
    const navigation = this.router.getCurrentNavigation();
		const state = navigation.extras.state as {
      item,
    };
    if(state!=undefined){
    this.brandsdetails =state.item;
    console.log(this.brandsdetails);

    this.authpostservice.exploreActivity(this.userid, this.brandsdetails.id)
    .then(doc => {
      console.log('doc', doc)
      if (doc.exists) {
        console.log("Document data:", doc.data());
        this.brandsdetails.Save = true;
      } else {
        this.brandsdetails.Save = false;
      }
      console.log('this is fir data', this.brandsdetails);
    });
    }
    
  }
  ngOnInit() {
    this.brandsdetails
  }
  crazyEvent(val, value, postimg){
    // console.log("vslueOfToggle",val.detail.checked)
    // console.log("vslueOfObj",value);
    // console.log("fff",postimg);
    // let records: [];
    // let obj = {
    //   records : [
    //     {
    //       id: value.id,
    //         fields: {
    //           Save: val.detail.checked,
    //           Name: this.brandsdetails.Name,
    //           Notes: this.brandsdetails.Notes,
    //               url: this.brandsdetails.url,
    //           TypeOfActivity: this.brandsdetails.TypeOfActivity,
    //         }
    //     }
    // ]
    // } 
    //   console.log("records",obj)
    // this.postapiaittable(obj)
  }
  
postapiaittable(toggleValue) { 
  let headers = new HttpHeaders();
   headers = this.createAuthorizationHeader(headers);
  const body = toggleValue ;
  console.log('body',body)
  this.http.put<any>('https://api.airtable.com/v0/appB26stg0dkRk7Zb/All%20Individual%20Activities', body, { headers }).subscribe(data => {
      this.postId = data;
      console.log('this.postAPI', this.postId)
  });
}
createAuthorizationHeader(headers: HttpHeaders) {
  let _token = "keyhliJN6zZ2igddb"
  headers = headers.append('Content-Type', 'application/json');
  headers = headers.append('Authorization', `Bearer ${_token}`);
  return headers;
}

firebaseEvent(val,value){
  this.brandsdetails
  console.log("vslueOfToggle",val.detail.checked)
  console.log("vslueOfObj",value);
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
  console.log('video', this.brandsdetails?.Video)
    }
   
    console.log(addrecord)
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
}

backbtn(){
  this.navctrl.navigateBack('saved-activities')
}
}
