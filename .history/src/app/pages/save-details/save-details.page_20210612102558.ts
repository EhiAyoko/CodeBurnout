import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-details',
  templateUrl: './save-details.page.html',
  styleUrls: ['./save-details.page.scss'],
})
export class SaveDetailsPage implements OnInit {

  brandsdetails: any = '';
  postId:any;
  brandsdetailsexp: any;
  userid: any;
  currentUser: any;
  constructor(private router: Router, private http: HttpClient,  public afStore: AngularFirestore,) { 
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

    this.afStore.firestore.collection('Team_activities_saved').doc(this.brandsdetails.id)
    .get()
    .then(doc => {
      if (doc.exists) {
        this.brandsdetails.Save = true;
      } else {
        this.brandsdetails.Save = false;
      }
      console.log('this is fir data',this.brandsdetails);
  });
    }
    
  }
  ngOnInit() {
  }
  crazyEvent(val, value, postimg){
    console.log("vslueOfToggle",val.detail.checked)
    console.log("vslueOfObj",value);
    console.log("fff",postimg);
    let records: [];
    let obj = {
      records : [
        {
            id: value.id,
            fields: {
              Save: val.detail.checked,
              Name: this.brandsdetails.fields.Name,
              ActivityCategory: this.brandsdetails.fields.ActivityCategory,
              description: this.brandsdetails.fields.description,
              FeaturedPhoto:[
                {
                  url: postimg.url,
                }
              ],
              TypeOfActivity: this.brandsdetails.fields.TypeOfActivity,
            }
        }
    ]
    } 
      console.log("records",obj)
    this.postapiaittable(obj)
  }
  
postapiaittable(toggleValue) { 
  let headers = new HttpHeaders();
   headers = this.createAuthorizationHeader(headers);
  const body = toggleValue ;
  console.log('body',body)
  this.http.put<any>('https://api.airtable.com/v0/appUBxaqmwbWUP9Rx/All%20Team%20Activities', body, { headers }).subscribe(data => {
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


firebaseEvent(val,value, postimg){
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
     if(this.brandsdetails &&  this.brandsdetails?.description !=undefined){
      addrecord['description'] =  this.brandsdetails?.description
     }
     if(this.brandsdetails &&  this.brandsdetails?.TypeOfActivity !=undefined){
      addrecord['TypeOfActivity'] =  this.brandsdetails?.TypeOfActivity
     }
    if(this.brandsdetails &&  this.brandsdetails?.ActivityCategory !=undefined){
      addrecord['ActivityCategory'] =  this.brandsdetails?.ActivityCategory
     }
     if(this.brandsdetails &&  postimg?.url !=undefined){
      addrecord['url'] =  postimg?.url
     }
   
    console.log(addrecord)
    this.afStore
      .collection('Team_activities_saved')
      .doc(this.brandsdetails.id)
      .set(addrecord).then(()=>{
      }); 
  }
  else{
    if(val.detail.checked === false){
      this.afStore.doc('/Team_activities_saved/' + this.userid + '/activity/' + value.id).delete()
    }
  }
}
}
