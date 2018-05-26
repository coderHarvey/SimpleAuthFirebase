import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database-deprecated';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  name:any;
  state: string= '';


  constructor(public afDB: AngularFireDatabase, public afAuth: AngularFireAuth, public router:Router) {

    this.afAuth.authState.subscribe(auth => {
      if(auth){
        this.name=auth;
      }
    });
   }

  logout(){
    this.afAuth.auth.signOut();
    console.log("logout complete");
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
