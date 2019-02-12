import { PostsService } from './../services/posts.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Post } from '../post.class';

@Component({
  selector: 'app-post-item-view',
  templateUrl: './post-item-view.component.html',
  styleUrls: ['./post-item-view.component.scss']
})
export class PostItemViewComponent implements OnInit {

  postForm: FormGroup;
  post: Post;  

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router:Router, private service:PostsService) { }

  ngOnInit() {    
    const id = this.route.snapshot.params['id'];    
    this.post  = this.service.getPostLocal(id);       
    console.log("Post id:"+JSON.stringify(this.post)); 
    this.InitialiseForm();
  }

  InitialiseForm(){
    this.postForm = this.formBuilder.group({
      title: [this.post.title, Validators.required],
      content: [this.post.content, Validators.required],
      visibility: this.post.visibility,
      //tags: this.post.tags
      //tags: this.formBuilder.array(this.post.tags)
      //tags: this.setTags(this.post.tags)
    })
  }

  onSubmitForm(){
    console.log("submit..."); 
    const formValue = this.postForm.value;        

    this.post.title = formValue['title'];
    this.post.content = formValue['content'];
    //this.post.loveIts = 0;    
    this.post.visibility = formValue['visibility'];
    //this.post.tags = formValue['tags'] ? formValue['tags']:[]

    this.service.updatePost(this.post);
    this.router.navigate(["/home"]);
  }

  setTags(tags: string[]){
    tags.forEach((tag) => {
      const newTagControl = this.formBuilder.control(tag);
      this.getTags().push(newTagControl);
    })
    //this.postForm.setValue({tags : this.post.tags} )
    //return this.postForm.get('tags') as FormArray; 
    return this.getTags();   
  }

  getTags(){
    //this.postForm.setValue({tags : this.post.tags} )
    return this.postForm.get('tags') as FormArray;    
  }

  onAddTags(){
    const newTagControl = this.formBuilder.control('', Validators.required);
    this.getTags().push(newTagControl);
  }

}
