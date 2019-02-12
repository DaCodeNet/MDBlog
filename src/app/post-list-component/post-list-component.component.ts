import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post.class';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {
	
  posts : Post[] = [];
  postSubscription: Subscription;

  constructor(private service:PostsService, private router: Router ) {    
   }

  ngOnInit() {     
    this.postSubscription = this.service.postSubject.subscribe((posts: Post[]) => {
      this.posts = posts;      
    })    
    this.service.getPosts();
  }

  ngOnDestroy() { 
    this.postSubscription.unsubscribe();
    }

}
