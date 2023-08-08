
export interface UserSignup{
    name:string,
    email:string,
    mobile:number,
    password:string
}

export interface userPosts{
    posts:post[]
    error:any
    errors:any
}

export interface user{
    _id:string
    name:string
    email:string
    password:string
    mobile:string
    profilePicture:string|null
    bio:string|null,
    followers:string[]
    following:string[]
    posts:post[]
    reportedPost:post[]
    isadmin:boolean
    block:boolean
    city:null|string,
    school:null|string
    createdAt:Date
    updatedAt:Date
    error:any;
    errors:any
}

export interface SignUpJson{
    created:boolean,
    token:string,
    user:user,
    error:{
        email:string,
        mobile:string,
        password:string,
        username:string
        }
}

export interface post {
    userId: string; 
    userName: string;
    description:string;
    image: string;
    like: string[]; 
    comments: string[]; 
    updated: boolean;
    blocked: boolean;
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    imageUrl: string;
    error:any;
    errors:any
  }

export interface LoginData{
    email:string,
    password:string
}

export interface LoginJson{
    user:user,
    token:string,
    errors:{
        email:string,
        password:string,
        block:string
    }
}

export interface comment{
        comment: string;
        createdAt: string;
        postId: string;
        reply: any[]; // You might want to create a type for the reply array as well
        updatedAt: string;
        userId: string;
        userName: string;
        __v: number;
        _id: string;
        error:any;
        errors:any;
}

export interface ReplyComment {
    commentId: string;
    createdAt: string;
    postId: string;
    reply: string;
    updatedAt: string;
    userId: string;
    userName: string;
    __v: number;
    _id: string;
    error:any;
    errors:any;
  }

  export interface ReplyCommentJson{
    replyComments:ReplyComment[]
    error:any;
    errors:any;
  }

export interface deleteComment{
    deleted:boolean;
    error:any;
    errors:any;
}