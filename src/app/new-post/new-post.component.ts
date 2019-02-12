import { Post } from './../post.class';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;
  now : Date;
  defaultVisibility : string = 'public';  

  constructor(private formBuilder: FormBuilder , private service: PostsService, private router:Router ) { }

  ngOnInit() {    
    this.InitialiseForm();    
  }

  InitialiseForm(){
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      visibility: '',
      tags: this.formBuilder.array([])
    })
  }

  onSubmitForm(){
    const formValue = this.postForm.value;
    this.now = new Date();
    const newPost =  new Post();
    newPost.id = uuid();
    newPost.title = formValue['title'];
    newPost.content = formValue['content'];
    newPost.loveIts = 0;
    newPost.createdAt = this.now.toLocaleDateString("fr")+' '+this.now.toLocaleTimeString("fr");;
    newPost.visibility = formValue['visibility'];
    newPost.tags = formValue['tags'] ? formValue['tags']:[]

    this.service.createPost(newPost);
    this.router.navigate(["/home"]);
  }

  getTags(){
    return this.postForm.get('tags') as FormArray;
  }

  onAddTags(){
    const newTagControl = this.formBuilder.control('', Validators.required);
    this.getTags().push(newTagControl);
  }

}
