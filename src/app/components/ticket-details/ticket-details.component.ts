import { Component, Input } from '@angular/core';
import { TicketModel } from '../../models/ticket-model';
import { HttpClient } from '@angular/common/http';
import { TicketService } from '../../services/ticket.service';
import { ActivatedRoute } from '@angular/router';
import { ResolutionFormComponent } from '../resolution-form/resolution-form.component';
import { UserService } from '../../services/user.service';
import { BookmarkService } from '../../services/bookmark.service';
import { Bookmark } from '../../models/bookmark';

@Component({
  selector: 'app-ticket-details',
  standalone: true,
  imports: [ResolutionFormComponent],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css'
})
export class TicketDetailsComponent {
  constructor(private ticketService: TicketService, private activatedRoute: ActivatedRoute, private userService:UserService, private bookmarkService:BookmarkService){}
  @Input() displayTicket: TicketModel = {} as TicketModel;
  bookmark:Bookmark = {} as Bookmark;
id:number = 0;

ngOnInit(){
  this.getID();
  this.callAPI();
}


  getID(): void{
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = Number(param.get("id"));
    })
  }

  callAPI(): void{
    this.ticketService.getById(this.id).subscribe((response: TicketModel) => {
      console.log(response);
      this.displayTicket = response;
    })
  }

  addResolution(t: TicketModel){
    this.ticketService.updateTicket(t).subscribe((response) => {
      this.callAPI();
    })
  }
  isLoggedIn():boolean{
    return this.userService.loggedIn;
  }

  addBookmark(){
      this.bookmark.ticketId = this.displayTicket.id;
      this.bookmark.userBookmarkedId = this.userService.currentUser.id;
      console.log(this.bookmark);
      
    this.bookmarkService.addBookmark(this.bookmark).subscribe((response) => {
      console.log(response);
    })
  }

  getUserEmail(id: number): string | undefined{
    return this.userService.users.find(u => u.id = id)?.email;
  }
  getUser(): string{
    
   return this.userService.currentUser.photoUrl;
  }
}
//https://lh3.googleusercontent.com/a/ACg8ocJ4wW3rSnU5IyT7M9JR4c57AxojV7fSS38j03Zf-RxI4X02dneTrg=s96-c