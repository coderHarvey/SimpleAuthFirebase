import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database-deprecated';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  error: any;

  constructor(public afDB: AngularFireDatabase, public afAuth: AngularFireAuth, public router:Router) {

    this.afAuth.authState.subscribe(auth => {
      if(auth){
        this.router.navigateByUrl('/members');
      }
    });
   }

   loginFB(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((success)=>{
      this.router.navigate(['/members']);
    }).catch((err)=>
       {this.error=err;
      }) ;
   }

   loginGoogle(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((success)=>{
      this.router.navigate(['/members']);
    }).catch((err)=>
       {this.error=err;
      }) ;
   }




  ngOnInit() {
  }

}
