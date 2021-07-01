import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public  router:  Router, private uniqueDeviceID: UniqueDeviceID) { }

  ngOnInit() {
  }
  SavedActivitiespage(){
    this.uniqueDeviceID.get()
    .then((uuid: any) => 
     console.log(uuid))
    .catch((error: any) => console.log(error));
    this.router.navigate(['saved-activities']);
  }
  BrowseActivitiespage(){
    this.router.navigate(['explore-activities']);
  }
  blogpage(){
    this.router.navigate(['blog']);
  }
  teamactivities(){
    this.router.navigate(['team-activities']); 0
  }
}
