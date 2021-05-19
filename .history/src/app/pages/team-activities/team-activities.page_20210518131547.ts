import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
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
  postId:any[];;
  postsPre: any[];;
  postfil: any[];;

  constructor(private http: HttpService, private navCtrl: NavController) { }

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
      this.postsPre = this.teams
      this.postfil = this.postsPre.map(item => item.fields.ActivityCategory)
      .filter((value, index, self) => self.indexOf(value) === index)
          console.log(this.teams);
          console.log('this map',this.postfil)
    }, error => {
      console.log(error);
    })
  }

  OnChange(searchbar) {
    console.log('mnmnnm', searchbar)
    // set q to the value of the searchbar
    var q = searchbar.detail.value
    // if the value is an empty string don't filter the items
    if (q.trim() == '') {
        return;
    }
    this.teams = this.postsPre.filter(item => item.fields.ActivityCategory === q);
    console.log("This Items",this.teams);
  }
  teamdetails(item){
    let navigationExtras: NavigationExtras = {
      state: {
        item
      },
    };
    this.navCtrl.navigateForward('team-details', navigationExtras);
  }
}