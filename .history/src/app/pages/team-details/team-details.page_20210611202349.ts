import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthicationService } from 'src/app/services/auth/authication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  addrecord: {type: string ; description: string; amount: number};  
  records: { id: string; Name: string; TypeOfActivity: string; url: string; }[];
  constructor(
    private router: Router, 
    private http: HttpClient,
    public afStore: AngularFirestore,
    public formBuilder: FormBuilder,
    private authpostservice : AuthicationService ) { 
      this.onSubmit()
  this.brandsdetails

  let currentUser = localStorage.getItem('LoginData');
  this.currentUser = JSON.parse(currentUser);
  console.log("CurentUser",this.currentUser);
  this.userid = this.currentUser.user.uid;
  }
  ngOnInit() {
  
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
          this.brandsdetails.fields.Save = true;
        } else {
          this.brandsdetails.fields.Save = false;
        }
        console.log('this is fir data',this.brandsdetails);
    });
 
    }
  }

  
crazyEvent(val,value,postimg){
  this.brandsdetails
  console.log("vslueOfToggle",val.detail.checked)
  console.log("vslueOfObj",value);
  let records: [];
  let obj = {
    records : [
      {
          id: value.id,
          fields: {
            Save: val.detail.checked,
            Name: this.brandsdetails.fields.Name,
            description: this.brandsdetails.fields.description,
            ActivityCategory: this.brandsdetails.fields.ActivityCategory,
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
  // this.todoForm = this.formBuilder.group({
  //   title: 'hamza',
  //   description: 'ameer hamza'
  // })
  // console.log('this.todoForm', this.todoForm)
 


  this.onSubmit()


  this.addrecord = {type :'', description :'', amount: null}    
  this.afStore.collection('/Team_activities_saved/').snapshotChanges().subscribe(res=>{
  console.log('res',res)

    if(res){
      this.records = res.map(e=>{
        return{
          id: e.payload.doc.id,
          Name: e.payload.doc.data()['Name'],
          TypeOfActivity: e.payload.doc.data()['TypeOfActivity'],
          url: e.payload.doc.data()['url']
        }
      })   
    }  
  })
  console.log('this.records',this.records)
}

// onSubmit() {
//   if (!this.todoForm.valid) {
//     return false;
//   } else {
//     console.log('this.todoForm.value', this.todoForm.value)
//     this.authpostservice.createpost(this.todoForm.value)
//     .then((data) => {
//       console.log('data', data)
//       this.todoForm.reset();
//       console.log('this.todoForm.reset()', this.todoForm.reset())
//       // this.router.navigate(['/todo-list']);
//     }).catch((err) => {
//       console.log(err)
//     });
//   }
// }
onSubmit() {
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  const lengthOfCode = 30;
  let randomId = this.authpostservice.makeRandom(lengthOfCode, possible);

  let comment = {
    id: randomId,
    title: 'ttt',
    description: 'ttt 66'
  };
  this.afStore
    .collection('tasks')
    .doc(randomId)
    .set(comment);
}


firebaseEvent(val,value, postimg){
  this.brandsdetails
  console.log("vslueOfToggle",val.detail.checked)
  console.log("vslueOfObj",value);
  if(val.detail.checked === true){
    let addrecord = {}
    addrecord['id'] = this.brandsdetails?.id
    addrecord['Name'] = this.brandsdetails?.fields?.Name
     addrecord['uid'] = this.userid
     addrecord['TypeOfActivity'] =  this.brandsdetails?.fields?.TypeOfActivity
     addrecord['description'] = this.brandsdetails?.fields?.description ? this.brandsdetails?.fields?.description:''
     addrecord['ActivityCategory'] = this.brandsdetails?.ActivityCategory
     addrecord['url'] = postimg?.url
    // addrecord['amount'] = 'hamza'
    console.log(addrecord)
    this.afStore
      .collection('Team_activities_saved')
      .doc(this.brandsdetails.id)
      .set(addrecord).then(()=>{
      
        this.addrecord = {type :'', description :'', amount: null} 
        // this.afStore.collection('Records').doc().set({id: '' , name:'hamza'})
      });
    // this.afStore.collection('/Team_activities_saved/').add(addrecord).then(()=>{
    //   this.addrecord = {type :'', description :'', amount: null} 

      // this.afStore.collection('Records').doc().set({id: '' , name:'hamza'})
    // })
    
  }
  else{
    if(val.detail.checked === false){
      this.afStore.doc('/Team_activities_saved/'+value.id).delete()
    }
  }
 
}

DeleteRecord(id){
  this.afStore.doc('/Team_activities_saved/'+id).delete()
}

}
