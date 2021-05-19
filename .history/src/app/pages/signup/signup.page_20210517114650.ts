import { Component, OnInit } from '@angular/core';
import { AuthicationService } from 'src/app/services/auth/authication.service'; 
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public studentForm: FormGroup;  // Define FormGroup to student's form
  myForm: FormGroup;
  error = false;
  errorMessage = '';
  products = [];
  public username="";
  public email="";
  public password="";
  loading: any;
  
  constructor(
    private db: AngularFirestore,
    public authService: AuthicationService,
    public router: Router,
    private fb: FormBuilder, 
    public ngFireAuth: AngularFireAuth,
    public alertController: AlertController,
    public loadingController: LoadingController
  ) { 
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', Validators.compose([
        Validators.required,
    ])],
      email: ['', Validators.compose([
          Validators.required,
          this.isEmail
      ])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.compose([
          Validators.required,
          this.isEqualPassword.bind(this)
      ])],
  });
 
}

isEmail(control: FormControl): {[s: string]: boolean} {
      if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
          return {noEmail: true};
      }
    }

    isEqualPassword(control: FormControl): {[s: string]: boolean} {
        if (!this.myForm) {
            return {passwordsNotMatch: true};

        }
        if (control.value !== this.myForm.controls['password'].value) {
            return {passwordsNotMatch: true};
        }
  }

async signUp() {
  if (this.myForm.value.password == this.myForm.value.confirmPassword) {
    this.ngFireAuth.createUserWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password)
      .then(async (res) => {
        console.log('res', res)
        localStorage.setItem('LoginData', JSON.stringify(res))
        let userId = (await this.ngFireAuth.currentUser).uid;
        console.log('userId for signup', userId)
        let userDoc = this.db.doc<any>('users/' + userId);
        userDoc.set({
          username: this.myForm.value.username,
          email: this.myForm.value.email
        });
        console.log('userDoc for signup', userDoc)
        this.loading = await this.loadingController.create({
          message: 'Please Wait...' 
         });
       this.loading.present();
       
        this.router.navigate(['dashboard']);  
        this.loading.dismiss();
      },(async (error) => {
     
          const alert = await this.alertController.create({
            message: error.message,
            buttons: [{ text: "Ok", role: 'cancel' }]
          });
          alert.present();
        }));
    // this.loading.present();
  } else {
    const alert = await this.alertController.create({
      message: "The passwords do not match.",
      buttons: [{ text: "Ok", role: 'cancel' }]
    });
    alert.present();
  }
}

}
