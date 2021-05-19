import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-saved-activities',
  templateUrl: './saved-activities.page.html',
  styleUrls: ['./saved-activities.page.scss'],
})
export class SavedActivitiesPage implements OnInit {
  public search = false ;
  public postsexpolore = [];
  public posts = [];
  public postsactivity = [];
  filterTerm: string;
  postId:any;
  public activities = [];
  postsPre: any[];
  postfil: any[];
  constructor(public postsService:HttpService,private http: HttpClient, private navCtrl: NavController) {
    this.ngOnInit()
this.ionViewWillEnter()
   }

   ngOnInit() {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(this.posts)
      this.postfil = this.posts.map(item => item.fields.TypeOfActivity)
      .filter((value, index, self) => self.indexOf(value) === index)
          console.log(this.activities);
          console.log('this map',this.postfil);
  })
  this.postsService.getActivities().subscribe((posts) => {
    this.postsexpolore = posts;
})
  }

  ionViewWillEnter(){
    this.ngOnInit()
  }

crazyEvent(val,value){
  console.log("vslueOfToggle",val.detail.checked)
  console.log("vslueOfObj",value);
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
  console.log("vslueOfToggle",val.detail.checked)
  console.log("vslueOfObj",value);
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
    console.log("records",obj)
  this.postapiaittable1(obj)
}

postapiaittable1(toggleValue) {
  let headers = new HttpHeaders();
   headers = this.createAuthorizationHeader(headers);
  const body = toggleValue ;
  console.log('body',body)
  this.http.put<any>('https://api.airtable.com/v0/appB26stg0dkRk7Zb/All%20Individual%20Activities', body, { headers }).subscribe(data => {
      this.postId = data;
      console.log('this.postAPI', this.postId)
  });
}
createAuthorizationHeader1(headers: HttpHeaders) {
  let _token = "keyhliJN6zZ2igddb"
  headers = headers.append('Content-Type', 'application/json');
  headers = headers.append('Authorization', `Bearer ${_token}`);
  return headers;
}

  search1(){
    if (this.search == false) {
    this.search = true;
    }
    else {
    this.search = false;
    }
  }
  savedetails(item){
    let navigationExtras: NavigationExtras = {
      state: {
        item
      },
    };
    this.navCtrl.navigateForward('save-details', navigationExtras);
  }
  OnChange(searchbar) {
    console.log('mnmnnm', searchbar)
    // set q to the value of the searchbar
    var q = searchbar.detail.value
    // if the value is an empty string don't filter the items
    if (q.trim() == '') {
        return;
    }
    this.activities = this.postsPre.filter(item => item.fields.TypeOfActivity === q);
    console.log("This Items",this.activities);
  }
}
