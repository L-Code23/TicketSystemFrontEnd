import { GoogleSigninButtonModule, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { BookmarkListComponent } from './components/bookmark-list/bookmark-list.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GoogleSigninButtonModule, TicketListComponent, BookmarkListComponent ,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private userService:UserService) { }

  ngOnInit(){
    this.userService.Login();
  }
  IsLoggedIn():boolean{
    return this.userService.loggedIn;
  }
  SignOut(){
    this.userService.signOut();
  }

}



