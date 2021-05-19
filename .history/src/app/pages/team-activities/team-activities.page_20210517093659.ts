import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-team-activities',
  templateUrl: './team-activities.page.html',
  styleUrls: ['./team-activities.page.scss'],
})
export class TeamActivitiesPage implements OnInit {
  public postsexpolore = [];
  public teams = [];
  filterTerm: string;
  public search = false ;
  public postsactivity = [];
  postId:any;
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

    this.http.getTeams().subscribe((res: any) => {
      // console.log(res);
      console.log(res);
      this.teams = res;

    }, error => {
      console.log(error);
    })
  }


}
