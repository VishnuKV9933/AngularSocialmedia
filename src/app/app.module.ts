import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserhomeComponent } from './User/Pages/userhome/userhome.component';
import { UserloginComponent } from './User/Pages/userlogin/userlogin.component';
import { UsersignupComponent } from './User/Pages/usersignup/usersignup.component';
import { UsersidebarComponent } from './User/Components/usersidebar/usersidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostFormComponent } from './User/Components/post-form/post-form.component';
import { UserComponent} from './User/UserComponent/user-component/user-component.component';
import { UserProfileComponent } from './User/Pages/user-profile/user-profile.component';
import { PostCardComponent } from './User/Components/post-card/post-card.component';
import { CommentModalComponent } from './Modal/comment-modal/comment-modal.component';
import { CommentComponent } from './User/Components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    UserhomeComponent,
    UserloginComponent,
    UsersignupComponent,
    UsersidebarComponent,
    PostFormComponent,
    UserComponent,
    UserProfileComponent,
    PostCardComponent,
    CommentModalComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
