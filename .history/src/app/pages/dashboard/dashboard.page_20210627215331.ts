import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  uuid: any;

  constructor(public  router:  Router) { }

  ngOnInit() {
  }
  SavedActivitiespage(){
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
