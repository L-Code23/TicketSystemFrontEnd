import { GoogleSigninButtonModule, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { BookmarkListComponent } from './components/bookmark-list/bookmark-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GoogleSigninButtonModule, TicketListComponent,BookmarkListComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;

  constructor(private socialAuthServiceConfig: SocialAuthService) { }
 
  ngOnInit() {
    //authState is a custom observable that will run again any time changes are noticed.
    this.socialAuthServiceConfig.authState.subscribe((userResponse: SocialUser) => {
      this.user = userResponse;
      //if login fails, it will return null.
      this.loggedIn = (userResponse != null);
    });
  }
  //login component doesn't account for logging out.
  signOut(): void {
    this.socialAuthServiceConfig.signOut();
  }
}



