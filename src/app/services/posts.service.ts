import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../post.class';
import * as firebase from 'firebase';
import Datasnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts : Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() { 
    this.getPosts();
  }

  // Retourne tous les poste depuis FireBase!
  getPosts(){
    return new Promise((resolve, reject) => {
      firebase.database().ref('/posts').on('value', (data:Datasnapshot)=>{
          this.posts = data.val() ? data.val() : [];
          this.emitPost();
       }), (error) =>{ console.log(error)}
    });
  }

  // Retourne le post suivant son ID!
  getPost(id : string){ 
    console.log("Get post id:"+id);   
    return new Promise((resolve, reject)=>{
      firebase.database().ref("/posts/"+id).once('value').then(
        (data:Datasnapshot)=>{
          resolve(data.val())
        }, (e) => {console.log('Erreur firebase once:'+e); reject(e);}
      ), (error)=>{
        reject(error);
      }
    });
  }

  getPostLocal(id : string):Post{ 
    console.log("Get post id:"+id);   
    const indexPost = this.posts.findIndex( (currentPost) => {
      if (currentPost.id === id ){
        return true;
      }
    } );
    return this.posts[indexPost];    
  }

  // Supprime le post de firebase
  removePost(post : Post)
  {
    const indexPostRemove = this.posts.findIndex( (currentPost) => {
      if (currentPost === post ){
        return true;
      }
    } );
    this.posts.splice(indexPostRemove,1);
    this.emitPost();
  }

    // Supprime le post de firebase
    updatePost(post : Post)
    {
      const indexPostUdpate = this.posts.findIndex( (currentPost) => {
        if (currentPost.id === post.id ){
          return true;
        }
      } );
      
      this.posts[indexPostUdpate] = post;
      this.savePost();
      this.emitPost();
    }

  // Met à ajour la liste des posts sur firebase
  savePost(){
    firebase.database().ref("/posts").set(this.posts);    
  }

  // Emets les changements apportés à la liste de post.
  emitPost(){    
    this.postSubject.next(this.posts);
  }

  // Création d'un post
  createPost(post:Post){
    console.log("nouveau post: "+JSON.stringify(post));
    this.posts.push(post);
    this.savePost();
    this.emitPost();
  }

  LikedPost(post:Post){        
    const indexPostToLike = this.posts.findIndex( (currentPost) => {
      if (currentPost === post ){
        return true;
      }
    } );

    this.posts[indexPostToLike].loveIts = post.loveIts;
    this.savePost();
  }

  UnlikedPost(post:Post){
    const indexPostToUnlike = this.posts.findIndex( (currentPost) => {
      if (currentPost === post ){
        return true;
      }
    } );

    this.posts[indexPostToUnlike].loveIts = post.loveIts;
    this.savePost();
  }


}
