import { Component, Input, OnInit } from '@angular/core';
import { post } from 'src/app/customTypes';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'postcard',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit{

  constructor(private postServise:PostServiceService){}

  @Input() post!:post
  userId:string|null=localStorage.getItem('user')

  Liked!:boolean
  likeCount!:number

  commentModalOpen:boolean=false

  ngOnInit(){
  
    console.log(this.post?.like.length);
    this.likeCount=this.post?.like.length
    this.isLiked()
  }

  setPostModalOpen(){
    console.log("parant");
    
    this.commentModalOpen=true
    console.log(this.commentModalOpen);
    
  }

  setCommentModalClose(){
    this.commentModalOpen=false
  }

  isLiked(){
    const Id=this.userId?.toString()

    this.post.like
    for (const elem of this.post.like){
      if(elem===this.userId){
        this.Liked=true
      }else{
        this.Liked=false
      }
    } 
  }

  likeUnlike(action:string):void{
    this.postServise.likeUnlike(this.userId,this.post._id).subscribe((data)=>{
     if(action==='like'){
      this.likeCount++
     }else{
      this.likeCount--
     }
      this.Liked=!this.Liked
    })
  }


}
