import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-activities',
  templateUrl: './saved-activities.page.html',
  styleUrls: ['./saved-activities.page.scss'],
})
export class SavedActivitiesPage implements OnInit {
  public search = false ;
  constructor() { }

  ngOnInit() {
  }

  search1(){
    if (this.search == false) {
    this.search = true;
    }
    else {
    this.search = false;
    }
  }


}
