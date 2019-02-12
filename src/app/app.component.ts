import { Component, Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.class';
import * as firebase from 'firebase';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title: string = 'Mon blog';
  posts: Array<Post> = require("./datas/posts.json");
  lastConnection: Date;

  constructor(cookie: CookieService) {
    this.lastConnection = new Date();

    const config = {
      apiKey: 'AIzaSyABd3IUAmWSoK9lgylILYcdoyOZ2P64vNY',
      authDomain: 'bookshelves-7a344.firebaseapp.com',
      databaseURL: 'https://bookshelves-7a344.firebaseio.com',
      projectId: 'bookshelves-7a344',
      storageBucket: 'bookshelves-7a344.appspot.com',
      messagingSenderId: '9757972867'
    };
    firebase.initializeApp(config);
    
    cookie.set('sessionid','admin_session_1981');
    cookie.set('lastconnection', this.lastConnection.toString());
  }

}
