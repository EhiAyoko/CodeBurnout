import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-support-circle',
  templateUrl: './support-circle.page.html',
  styleUrls: ['./support-circle.page.scss'],
})
export class SupportCirclePage implements OnInit {

  public persons = [];
  constructor(private http: HttpService, private router:Router) { }

  ngOnInit() {
    this.loadPerson();
  }
  ionViewWillEnter() {
    this.loadPerson();
  }

  loadPerson(){
    this.http.getPersons().subscribe((res: any) => {
      // console.log(res);
      console.log(res);
      this.persons = res;

    }, error => {
      console.log(error);
    })
  }

  addPerson(){
    this.router.navigateByUrl('support-circle/add-person')
  }

  editPerson(){
    this.router.navigateByUrl('support-circle/add-person')
  }

}
