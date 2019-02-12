import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isNewPost : boolean;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  /*
  onNewPost = () =>{
    console.log("rédirection vers la page NewPost");
    this.isNewPost = true;
    this.router.navigate(['/post/new']);
  }

  
  onBackToList = () =>{
    console.log("rédirection vers la liste des posts");
    this.isNewPost = false;
    this.router.navigate(['/home']);
  }*/

}
