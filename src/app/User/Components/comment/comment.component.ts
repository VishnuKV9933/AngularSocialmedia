import { Component, EventEmitter, Input, Output } from '@angular/core';
import { comment ,post,ReplyComment} from 'src/app/customTypes';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  constructor(private postService:PostServiceService){}

  @Input() Inputcomment!:comment
  @Input() InputPost!:post
  @Output() Commentdelete:EventEmitter<void>=new EventEmitter()

  replyOpen:boolean=false

  replyComment:string=''

  AllReplyComments:ReplyComment[]=[]

  userId:string|null=localStorage.getItem('user')

  

  ngOnInit(){
   this.getReplyComment()
    
  }

  setreplyOpen(){
    this.replyOpen=!this.replyOpen
  }

  getReplyComment(){
    this.postService.getReplyComments(this.Inputcomment._id).subscribe((data)=>{
     
      this.AllReplyComments=data.replyComments
     
      
    })
  }
  
  deleteComment(){
  if( this.userId!==this.InputPost.userId && this.userId !==this.Inputcomment.userId) return
    this.postService.deleteComment(this.Inputcomment.postId,this.Inputcomment._id).subscribe((data)=>{
      console.log(data);
     this.Commentdelete.emit()
    })
  }

  deleteReply(replyId:string,userId:string){
    if( this.userId !==this.InputPost.userId && this.userId !==this.Inputcomment.userId && this.userId==userId) return
    this.postService.deleteReply(this.Inputcomment._id,replyId).subscribe((data)=>{
      this.getReplyComment()
    })
  }

  addReply(){

    if(this.replyComment.trim()!==""){
     console.log("fddd");
     
      this.postService.addReplyComment(this.userId,this.Inputcomment._id,this.replyComment).subscribe((data)=>{
        this.replyComment=''
        this.getReplyComment()
      })
    }

  }

}
