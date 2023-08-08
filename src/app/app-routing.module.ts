import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './User/Pages/userlogin/userlogin.component';
import { UsersignupComponent } from './User/Pages/usersignup/usersignup.component';
import { UserhomeComponent } from './User/Pages/userhome/userhome.component';

const routes: Routes = [
  {path:'login',component:UserloginComponent},
  {path:'signup',component:UsersignupComponent},
  {path:'',component:UserhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
