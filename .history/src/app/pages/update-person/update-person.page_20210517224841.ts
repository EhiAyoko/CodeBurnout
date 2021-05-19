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
    // id : '1FVHoL4FTmYtmAa'
  }
  count: any = 0;
  constructor(public httpClient: HttpClient,
    public loadingController: LoadingController,private alertController : AlertController,  private navclrl: NavController, public circleService:HttpService,public router: Router,) { 
    let currentUser = localStorage.getItem('LoginData');
    this.currentUser = JSON.parse(currentUser);
    console.log("CurentUser",this.currentUser);
    this.data.userid = this.currentUser.user.uid;
    }

  ngOnInit() {
    // this.addCircle()
    this.circleService.circleGet().subscribe((circles) => {
      this.circles = circles;
      console.log('circles',this.circles);
      for(var circle of this.circles) {
        if(circle.fields.userid === this.data.userid) {
          this.count++;
        }
      }
    });
  }
 async addCircle() {
    let obj = {
      records : [
        {
            // id: this.data.id,
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
    this.httpClient.post<any>('https://api.airtable.com/v0/appSaPUQYwoPVm8Ny/Table%201', body, { headers }).subscribe(data => {
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
