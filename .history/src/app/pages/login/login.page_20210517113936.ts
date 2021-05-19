import { Component, OnInit } from '@angular/core';
import { AuthicationService } from 'src/app/services/auth/authication.service'; 
import { Router } from "@angular/router";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loading: any;
  constructor(
    public authService: AuthicationService,
    public router: Router,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }
 
  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then(async (res) => {
        localStorage.setItem('LoginData', JSON.stringify(res))
        this.loading = await this.loadingController.create({
          message: 'Logging you in...' 
         });
       this.loading.present();
      
        this.router.navigate(['dashboard']);  
        this.loading.dismiss();
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  register(){
    this.router.navigate(['signup']); 
  }
}
