import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { AboutComponent } from './pages/about/about.component';
import { MeComponent } from './components/me/me.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';

import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PostListComponent,
    AboutComponent,
    MeComponent,
    FooterComponent,
    PostDetailsComponent,
    BlogPostComponent,
    AdminComponent,
    CommentComponent,
    CommentFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
     MatInputModule,
      MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
