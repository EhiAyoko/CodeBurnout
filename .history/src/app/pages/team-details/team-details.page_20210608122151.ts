import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthicationService } from 'src/app/services/auth/authication.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {
  todoForm: FormGroup;

  brandsdetails: any = '';
  postId: any;
  togglesavevalue: any = '';
  constructor(
    private router: Router, 
    private http: HttpClient,
    public formBuilder: FormBuilder,
    private authpostservice : AuthicationService ) { 
  this.brandsdetails
  }
  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
		const state = navigation.extras.state as {
      item,
    };
    if(state!=undefined){
    this.brandsdetails =state.item;
    console.log(this.brandsdetails);
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

  this.todoForm = this.formBuilder.group({
    title: ['hamza'],
    description: ['ameer hamza']
  })
  console.log('this.todoForm', this.todoForm)
  this.onSubmit()
}

onSubmit() {
  if (!this.todoForm.valid) {
    return false;
  } else {
    this.authpostservice.createpost(this.todoForm.value)
    .then(() => {
      this.todoForm.reset();
      this.router.navigate(['/todo-list']);
    }).catch((err) => {
      console.log(err)
    });
  }
}
}
