import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatMenuModule, MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, MatBadgeModule, MatSidenavModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { AbsPipe } from './abs.pipe';
import { NewPostComponent } from './new-post/new-post.component';
import { PostsService } from './services/posts.service';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import {MatChipsModule} from '@angular/material/chips';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { PostItemViewComponent } from './post-item-view/post-item-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    AbsPipe,
    NewPostComponent,
    HeaderComponent,
    MydashboardComponent,
    PostItemViewComponent,  
  ],
  imports: [
    BrowserModule 
  , AppRoutingModule
  , FormsModule
  , ReactiveFormsModule
	, BrowserAnimationsModule
	, MatToolbarModule
	, MatCardModule
	, MatButtonModule
	, MatIconModule
  , MatBadgeModule
  , MatChipsModule
  , MatMenuModule, LayoutModule, MatSidenavModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatFormFieldModule, MatSelectModule, MatInputModule 
  ],
  exports: [
	BrowserAnimationsModule
	, MatToolbarModule
	, MatCardModule
	, MatButtonModule
	, MatIconModule
  , MatBadgeModule
  , MatMenuModule
  , MatFormFieldModule
  , MatSelectModule  
  , MatChipsModule
  ],
  providers: [PostsService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
