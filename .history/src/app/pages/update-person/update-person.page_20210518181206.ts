import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.page.html',
  styleUrls: ['./update-person.page.scss'],
})
export class UpdatePersonPage implements OnInit {

  postId: any;
  circles:any; loading: any;
  currentUser:any;
  data = {
    Name : '',
    relationship : '',
    phone_number : '',
     userid : '',
     Email : '',
     id : ''
  }
  count: any = 0;
  blogdetails: any;
  constructor(public httpClient: HttpClient,
    public loadingController: LoadingController,private alertController : AlertController,  private navclrl: NavController, public circleService:HttpService,public router: Router,) {
      const navigation = this.router.getCurrentNavigation();
      const state = navigation.extras.state as {
        item,
      };
      if(state != undefined){
        console.log(state.item);
      this.blogdetails = state.item;
      }
      console.log(this.blogdetails);
    }

  ngOnInit() {
  }
 async updateCircle() {
    let obj = {
      records : [
        {
             id: this.data.id,
            fields: {
              Name: this.data.Name,
              Email: this.data.Email,
              relationship: this.data.relationship,
              phone_number: this.data.phone_number,
              userid : this.data.userid,
            }
        }
    ]
    }
    console.log(this.count);
    if(this.count < 5){
      this.postapiaittable1(obj)
    }else{
      const alert = await this.alertController.create({
        message: "Your Limits has been reached.",
        buttons: [{ text: "Ok", role: 'cancel' }]
      });
      alert.present();
    }
  }
  postapiaittable1(toggleValue) {
    let headers = new HttpHeaders();
     headers = this.createAuthorizationHeader1(headers);
    const body = toggleValue ;
    console.log('body',body)
    this.httpClient.put<any>('https://api.airtable.com/v0/appSaPUQYwoPVm8Ny/Table%201', body, { headers }).subscribe(data => {
        this.postId = data;
        console.log('this.postAPI', this.postId);
        this.navclrl.navigateRoot('support-circle');
    });
  }
  createAuthorizationHeader1(headers: HttpHeaders) {
    let _token = "keyhliJN6zZ2igddb"
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${_token}`);
    return headers;
  }
}
