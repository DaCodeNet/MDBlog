import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPostComponent } from './new-post/new-post.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { PostItemViewComponent } from './post-item-view/post-item-view.component';

const routes: Routes = [  
  { path: 'home', component: PostListComponentComponent },
  { path: 'post/new', component: NewPostComponent },
  { path: 'post/view/:id', component: PostItemViewComponent },
  { path: '', redirectTo: 'post', pathMatch: 'full' },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
