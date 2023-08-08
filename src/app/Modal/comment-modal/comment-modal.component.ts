import { AfterContentChecked, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { comment, post } from 'src/app/customTypes';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'commentmodal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.css']
})
export class CommentModalComponent  implements OnInit {
  constructor(private postService:PostServiceService){}
  @Input()ModalOpen!:boolean

  @Input() post!:post;

  @Output() closeModal:EventEmitter<void>=new EventEmitter() 
  userId:string|null=localStorage.getItem('user')
  comment:string=''
  allComment:comment[]=[]

  ngOnInit(): void {
    this.getComments()
   
  }
  
  getComments(){

    try {
      this.postService.getComments(this.post._id).subscribe((data)=>{
        console.log(data);
        this.allComment=data
      })
      
    } catch (error) {
      console.log(error);
      
    }
    
  }
 
  commentModalClose(event:Event){
    try {
      const clickedElement = event.target as HTMLElement;
      const idAttribute=clickedElement.getAttribute('id')
      if(idAttribute==='wrapper') this.closeModal.emit()
    } catch (error) {
      console.log(error);
    }

  }

  getTest(event:Event){
    const inputElement = event.target as HTMLInputElement;
    this.comment=inputElement.value
  }
    

  addComment(){
    
    
    if(this.comment.trim()!==''){

      
      this.postService.addComment(this.userId,this.post._id,this.comment).subscribe((data)=>{
        console.log(data,"commetn added");
        this.getComments()
      })
    }
    this.comment=''
  }
}
