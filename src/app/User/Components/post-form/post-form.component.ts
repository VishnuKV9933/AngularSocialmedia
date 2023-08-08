import { Component, EventEmitter, Output } from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { PostServiceService } from 'src/app/services/post-service.service';
import { post} from 'src/app/customTypes';
@Component({
  selector: 'postform',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
    constructor(private postService:PostServiceService){}

    @Output() postEvent:EventEmitter<void>=new EventEmitter()
  Image=faImage

  selectedFile:File | null = null; 
  postTest:string=''

  getFile(event:Event){
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      if(inputElement.files[0].type.startsWith('image/')){
        
        this.selectedFile = inputElement.files[0];}
        console.log('Selected file:', this.selectedFile);
    }
  }

  getTest(event:Event){
    const inputElement = event.target as HTMLInputElement;
    this.postTest=inputElement.value
  }
    

  Onsubmit():void{

    
  
   
    const formData = new FormData();

    if(!this.selectedFile&&this.postTest.trim()==='') return

    const jwt:string|null=localStorage.getItem('userToken')


    if (this.selectedFile && this.postTest.trim()===''){
      console.log("1");
      
      formData.append('image', this.selectedFile);
    }else if(!this.selectedFile&&this.postTest.trim()!==''){

        console.log("2");
      console.log(this.selectedFile);
      console.log(this.postTest);
      
        
      formData.append('description', this.postTest);
    }else if(this.selectedFile && this.postTest.trim()!==''){
      console.log("3");
      
      formData.append('image', this.selectedFile);
      formData.append('description', this.postTest);
    }
     
      
    this.postService.postUpload(formData,jwt).subscribe((data:post)=>{
    console.log(data);

    this.postEvent.emit()


    })
    this.postTest=''
    this.selectedFile=null
    

  }


  }


