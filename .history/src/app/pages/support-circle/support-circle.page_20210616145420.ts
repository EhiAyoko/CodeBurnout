import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-support-circle',
  templateUrl: './support-circle.page.html',
  styleUrls: ['./support-circle.page.scss'],
})
export class SupportCirclePage implements OnInit {
editbtn= false;
  public persons = [];
  currentUser: any;
  userid: any;
  constructor(private http: HttpService, private router:Router,  private navCtrl: NavController,) { 
    let currentUser = localStorage.getItem('LoginData');
    this.currentUser = JSON.parse(currentUser);
    // console.log("CurentUser",this.currentUser);
    this.userid = this.currentUser.user.uid;
  }

  ngOnInit() {
    this.loadPerson();
  }
  ionViewWillEnter() {
    this.loadPerson();
  }

  loadPerson(){
    this.http.getPersons().subscribe((res: any) => {
      // console.log(res);
      // console.log(res);
      this.persons = res;

    }, error => {
      // console.log(error);
    })
  }

  addPerson(){
    this.router.navigateByUrl('support-circle/add-person')
  }

  editPerson(){
    if(!this.editbtn){
      this.editbtn = true;

    } else{
      this.editbtn = false;
    }
  }
  edititem(item){
// console.log(item)
    let navigationExtras: NavigationExtras = {
      state: {
        item
      },
    };
         this.navCtrl.navigateForward('update-person', navigationExtras);
  }
}
