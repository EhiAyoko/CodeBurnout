import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
  postsPre: any[];
  postfil: any[];
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
    this.http.getActivities().subscribe((res: any) => {
      // console.log(res);
      console.log(res);
      this.activities = res;
      this.postsPre = this.activities
      this.postfil = this.postsPre.map(item => item.fields.TypeOfActivity)
  .filter((value, index, self) => self.indexOf(value) === index)
      console.log(this.activities);
      console.log('this map',this.postfil);
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
  this.activities = this.postsPre.filter(item => item.fields.TypeOfActivity === q);
  console.log("This Items",this.activities);
}
exploredetails(){
  this.navCtrl.navigateForward('explore-details');
}
}
