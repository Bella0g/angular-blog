import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { NgIconsModule } from '@ng-icons/core';
import { bootstrapInstagram, bootstrapTwitter, bootstrapLinkedin } from '@ng-icons/bootstrap-icons';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { AboutComponent } from './pages/about/about.component';
import { MeComponent } from './components/me/me.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';

import { AdminComponent } from './pages/admin/admin.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { PostService } from './service/post.service';
import { ReactBtnComponent } from './components/react-btn/react-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PostListComponent,
    AboutComponent,
    MeComponent,
    FooterComponent,
    PostDetailsComponent,
    AdminComponent,
    CommentFormComponent,
    ReactBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgIconsModule.withIcons({ bootstrapInstagram, bootstrapLinkedin ,bootstrapTwitter  }),
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
