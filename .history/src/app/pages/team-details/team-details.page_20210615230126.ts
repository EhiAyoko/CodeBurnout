import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthicationService } from 'src/app/services/auth/authication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {
  todoForm: FormGroup;
  currentUser: any;
  brandsdetails: any = '';
  postId: any;
  userid: any;
  togglesavevalue: any = '';
  addrecord: { type: string; description: string; amount: number };
  records: { id: string; Name: string; TypeOfActivity: string; url: string; }[];
  vidoeget: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    public afStore: AngularFirestore,
    private socialSharing: SocialSharing,
    public formBuilder: FormBuilder,
    private authpostservice: AuthicationService,
    public actionSheetController: ActionSheetController
    ) {
    this.brandsdetails

    let currentUser = localStorage.getItem('LoginData');
    this.currentUser = JSON.parse(currentUser);
    console.log("CurentUser", this.currentUser);
    this.userid = this.currentUser.user.uid;
  }
  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      item,
    };
    if (state != undefined) {
      this.brandsdetails = state.item;
      console.log(this.brandsdetails);

      this.authpostservice.getActivity(this.userid, this.brandsdetails.id)
        .then(doc => {
          console.log('doc', doc)
          if (doc.exists) {
            console.log("Document data:", doc.data());
            this.brandsdetails.fields.Save = true;
          } else {
            this.brandsdetails.fields.Save = false;
          }
          console.log('this is fir data', this.brandsdetails);
        });

    }
  }
  async sShare(postimg, brandsdetails){
    console.log('brandsdetails', brandsdetails)
    var options = {
      message: 'code burnout app: ' + this.brandsdetails.fields.Name, // not supported on some apps (Facebook, Instagram)
      text: brandsdetails.fields.description, // fi. for email
      url: postimg.url,
      chooserTitle: 'code burnout', // Android only, you can override the default share sheet title
      
    };
   
  await  this.socialSharing.shareWithOptions(options);
  }
// working for save activity
  crazyEvent(val, value, postimg) {
    this.brandsdetails
    console.log("vslueOfToggle", val.detail.checked)
    console.log("vslueOfObj", value);
    let records: [];
    let obj = {
      records: [
        {
          id: value.id,
          fields: {
            Save: val.detail.checked,
            Name: this.brandsdetails.fields.Name,
            description: this.brandsdetails.fields.description,
            ActivityCategory: this.brandsdetails.fields.ActivityCategory,
            FeaturedPhoto: [
              {
                url: postimg.url,
              }
            ],
            TypeOfActivity: this.brandsdetails.fields.TypeOfActivity,
          }
        }
      ]
    }
    console.log("records", obj)
    this.postapiaittable(obj)
  }

  postapiaittable(toggleValue) {
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    const body = toggleValue;
    console.log('body', body)
    this.http.put<any>('https://api.airtable.com/v0/appUBxaqmwbWUP9Rx/All%20Team%20Activities', body, { headers }).subscribe(data => {
      this.postId = data;
      this.brandsdetails
      console.log('this.postAPI', this.postId)
    });
  }
  createAuthorizationHeader(headers: HttpHeaders) {
    let _token = "keyhliJN6zZ2igddb"
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${_token}`);
    return headers;
  }

  ionViewWillEnter() {
    this.brandsdetails

    this.addrecord = { type: '', description: '', amount: null }
    this.afStore.collection('/Team_activities_saved/').snapshotChanges().subscribe(res => {
      console.log('res', res)

      if (res) {
        this.records = res.map(e => {
          return {
            id: e.payload.doc.id,
            Name: e.payload.doc.data()['Name'],
            TypeOfActivity: e.payload.doc.data()['TypeOfActivity'],
            url: e.payload.doc.data()['url']
          }
        })
      }
    })
    console.log('this.records', this.records)
  }



  firebaseEvent(val, value, postimg) {

  //  console.log('fillter data', this.brandsdetails.fields.find(item => item.Video === 0).Video.url )

  //   console.log("this.brandsdetails.fields.Video[0].url", this.brandsdetails.fields.Video[0].url)
    this.brandsdetails
    console.log("vslueOfToggle", val.detail.checked)
    console.log("vslueOfObj", value);
    if (val.detail.checked === true) {
      let addrecord = {}
      addrecord['id'] = this.brandsdetails?.id
      if (this.brandsdetails && this.brandsdetails?.fields.Name != undefined) {
        addrecord['Name'] = this.brandsdetails?.fields?.Name
      }
      addrecord['uid'] = this.userid
      if (this.brandsdetails && this.brandsdetails?.fields.description != undefined) {
        addrecord['description'] = this.brandsdetails?.fields?.description
      }
      if (this.brandsdetails && this.brandsdetails?.fields.TypeOfActivity != undefined) {
        addrecord['TypeOfActivity'] = this.brandsdetails?.fields?.TypeOfActivity
      }
      if (this.brandsdetails && this.brandsdetails?.fields.ActivityCategory != undefined) {
        addrecord['ActivityCategory'] = this.brandsdetails?.fields?.ActivityCategory
      }
      if (this.brandsdetails && this.brandsdetails?.fields.ActivityCategory != undefined) {
        addrecord['ActivityCategory'] = this.brandsdetails?.fields?.ActivityCategory
      }
      if (this.brandsdetails && postimg?.url != undefined) {
        addrecord['url'] = postimg?.url
      }
      if (this.brandsdetails.fields.Video != undefined) {
        addrecord['Video'] = this.brandsdetails?.fields?.Video[0]?.url
    console.log('video', this.brandsdetails?.fields?.Video[0]?.url)
      }

      console.log(addrecord)
      this.afStore
        .collection('Team_activities_saved/' + this.userid + '/activity')
        .doc(this.brandsdetails.id)
        .set(addrecord).then(() => {

          this.addrecord = { type: '', description: '', amount: null }
          // this.afStore.collection('Records').doc().set({id: '' , name:'hamza'})
        });
    }
    else {
      if (val.detail.checked === false) {
        this.afStore.doc('/Team_activities_saved/' + this.userid + '/activity/' + value.id).delete()
      }
    }
  }

  DeleteRecord(id) {
    this.afStore.doc('/Team_activities_saved/' + id).delete()
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
         {
        text: 'WhatsApp',
        icon: 'logo-whatsapp',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Instagram',
        icon: 'logo-instagram',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'logo-facebook',
        icon: 'logo-facebook',
        handler: () => {
          this.socialSharing.shareViaWhatsApp('Message via WhatsApp', this.brandsdetails.fields.Name,  this.brandsdetails.fields.ActivityCategory,)
          console.log('Favorite clicked');
        }
      }, 
      {
        text: 'Twitter',
        icon: 'logo-twitter',
        handler: () => {
          console.log('Favorite clicked');
        }
      },
      {
        text: 'SMS',
        icon: 'chatbubble-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
