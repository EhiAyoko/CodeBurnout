import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  public search = false ;

 public posts: Object[];
visible = false;
  constructor(public http:HttpService,  public router: Router) { }

  ngOnInit() {
    this.http.blogget().subscribe((post :any) => {
      this.posts = post;
      console.log(this.posts)
  },error => {
    console.log(error);
  })
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
