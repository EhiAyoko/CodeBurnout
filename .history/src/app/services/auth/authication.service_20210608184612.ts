import { Injectable, NgZone  } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { LoadingController } from '@ionic/angular';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class TODO {
  postId?: string;
  title?: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthicationService {
  userData: string;
  email: string;
  password: string;
  isLoading = false

  private todo: Observable<TODO[]>;
  private userCollections: AngularFirestoreCollection<TODO>;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,  
    public ngZone: NgZone, public loadingCtrl: LoadingController
  ) {
    this.userCollections = this.afStore.collection<TODO>('user_data');
    this.todo = this.userCollections.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = data.uid;
          return { id, ...data };
        });
      })
    );
  }
  
    // Login in with email/password
    SignIn(email: string, password: string) {
      return this.ngFireAuth.signInWithEmailAndPassword(email, password)
    }

    // Register user with email/password
  RegisterUser(email: string, password: string) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password)
  }

  async showLoading() {
    this.isLoading = true;
    this.loadingCtrl.create({
    cssClass: 'my-custom-class',
    spinner: 'circles',
    }).then(loader => {
    loader.present().then(() => {
    if (!this.isLoading) {
    loader.dismiss();
    }
    });
    });
    }

    async hideLoading() {
      this.isLoading = false;
      this.loadingCtrl.getTop().then(loader => {
        if (loader) {
          loader.dismiss();
        }
      });
    }

  signupUser(user) {
    return this.ngFireAuth.createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        // Handle Errors here.
        //var errorCode = error.code;
        //var errorMessage = error.message;
        console.log(error);
        // ...
      });
  }

  // create post
  createpost(todo: TODO) {
    console.log('todo', todo)
    const quoteData = JSON.parse(JSON.stringify(todo))
    console.log('quoteData', quoteData)
    return this.afStore.collection('tasks').add(quoteData);
    
  }
  addItem(todo: TODO): Promise<DocumentReference> {
    return this.userCollections.add(todo1);
  }
}
