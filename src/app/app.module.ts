import { NgModule }      	from '@angular/core';
import { RouterModule }  	from '@angular/router';
import { FormsModule } 		from '@angular/forms';
import { BrowserModule } 	from '@angular/platform-browser';
import { HttpModule } 	 	from '@angular/http';

import { AppComponent }  	from './app.component';
import { HomeComponent } 	from './home/home.component';
import { LoginComponent }   from './login/login.component';
import { AccountComponent } from './account/account.component';
import { AuthService } 	 	from './auth.service';
import { LoginGuard } 		from './login-guard.service';

@NgModule({
  declarations: [ AppComponent, LoginComponent, HomeComponent, AccountComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'account',
        component: AccountComponent,
        canActivate: [LoginGuard]
      }
    ])
  ],
  providers: 	[ LoginGuard, AuthService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
