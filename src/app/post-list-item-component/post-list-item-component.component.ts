import { PostsService } from './../services/posts.service';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.class';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

	@Input() post: Post;  

  constructor(private service:PostsService, private router:Router) { }

  ngOnInit() {
  }

  loveIt () {
    this.post.loveIts++;
    this.service.LikedPost(this.post);    
  }

  dontLoveIt () {
    this.post.loveIts--;
    this.service.UnlikedPost(this.post);    
  }

  onViewPost() {
    this.router.navigate(['/post', 'view', this.post.id]);    
  }

  onPostDelete(){
    if(confirm("Voulez-vous vraiment supprimer ce post?")) {      
      this.service.removePost(this.post);
    }        
  }  

}
