import { ModuleWithProviders } from "@angular/core";
import { Routes, Router, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

export const router: Routes= [
    {path: '', redirectTo: 'login', pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'email', component: EmailComponent},
    {path: 'members', component: MembersComponent, canActivate:[AuthService]}
    
]
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
