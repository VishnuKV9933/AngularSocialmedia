import { AfterContentChecked, Component } from '@angular/core';
import { post,user, userPosts } from 'src/app/customTypes';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  constructor(private postServise:PostServiceService){}
  userId:string|null=null
  Userposts:post[]=[]
  user!:user
  ngOnInit(){
    this.userId=localStorage.getItem('user')
    this.getUser()
    this.getUserPost()
  }


  getUser(){
      this.postServise.getUser(this.userId).subscribe((data)=>{
        this.user=data;
      })
  }

  getUserPost(){
    this.postServise.getUserPosts(this.userId).subscribe((data:userPosts)=>{
      this.Userposts=data.posts;
    })
  }


}
