import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.page.html',
  styleUrls: ['./blog-details.page.scss'],
})
export class BlogDetailsPage implements OnInit {
  blogdetails: any;
  constructor(private router: Router,private socialSharing: SocialSharing,  private activatedRoute: ActivatedRoute,) {
    const navigation = this.router.getCurrentNavigation();
		const state = navigation.extras.state as {
      item,
    };
    if(state != undefined){
      console.log(state.item);
    this.blogdetails = state.item;
    }
    console.log(this.blogdetails);
   }

  ngOnInit() {
  }
  async sSShare(blogdetails){
    var options = {
      message: 'Activiy Name: ' + blogdetails.fields.Title, // not supported on some apps (Facebook, Instagram)
      url: 'code burnout app: ' + 'https://apps.apple.com/us/app/code-burnout/id1561832368',
      chooserTitle: 'code burnout', // Android only, you can override the default share sheet title
      
    };
      await  this.socialSharing.shareWithOptions(options);
    // await  this.socialSharing.share('this is msg', 'subject', 'url').then().catch();
  
  }
}
