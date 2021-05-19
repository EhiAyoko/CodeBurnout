import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-explore-activities',
  templateUrl: './explore-activities.page.html',
  styleUrls: ['./explore-activities.page.scss'],
})
export class ExploreActivitiesPage implements OnInit {
  public activities = [];
  public search = false ;
  filterTerm: string;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.loadActivity();
  }

  search1(){
    if (this.search == false) {
    this.search = true;
    }
    else {
    this.search = false;
    }
  }


  loadActivity(){

    this.http.getActivities().subscribe((res: any) => {
      // console.log(res);
      console.log(res);
      this.activities = res;

    }, error => {
      console.log(error);
    })
  }


}
