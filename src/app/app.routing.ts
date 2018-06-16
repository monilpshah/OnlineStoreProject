import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';



const arr:Routes=[
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'viewprofile/:emailId',component:ViewprofileComponent},
    {path:'editprofile/:emailId',component:EditprofileComponent},
    {path:'changepassword/:emailId',component:ChangepasswordComponent},
    {path:'forgetpass',component:ForgetpasswordComponent}
];

export const routing=RouterModule.forRoot(arr);
