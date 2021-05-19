import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.page.html',
  styleUrls: ['./blog-details.page.scss'],
})
export class BlogDetailsPage implements OnInit {
  blogdetails: any[];

  constructor(private router: Router,  private activatedRoute: ActivatedRoute,) {



    const navigation = this.router.getCurrentNavigation();
		const state = navigation.extras.state as {
      item,
    };
    if(state == undefined){
      console.log(state.item);
    this.blogdetails = state.item;
   
    }
    console.log(this.blogdetails);
   }

  ngOnInit() {
  
  }

}
