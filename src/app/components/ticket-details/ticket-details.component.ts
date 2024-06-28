import { Component, Input } from '@angular/core';
import { TicketModel } from '../../models/ticket-model';
import { HttpClient } from '@angular/common/http';
import { TicketService } from '../../services/ticket.service';
import { ActivatedRoute } from '@angular/router';
import { ResolutionFormComponent } from '../resolution-form/resolution-form.component';
import { UserService } from '../../services/user.service';
import { BookmarkService } from '../../services/bookmark.service';
import { Bookmark } from '../../models/bookmark';
import { CommentModel } from '../../models/comment-model';
import { CommentService } from '../../services/comment.service';
import { FormsModule } from '@angular/forms';
import { BookmarkListComponent } from '../bookmark-list/bookmark-list.component';

@Component({
  selector: 'app-ticket-details',
  standalone: true,
  imports: [ResolutionFormComponent, FormsModule, BookmarkListComponent],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css'
})
export class TicketDetailsComponent {
  constructor(private ticketService: TicketService, private activatedRoute: ActivatedRoute, private userService:UserService, 
    private bookmarkService:BookmarkService, private commentService:CommentService){}
  @Input() displayTicket: TicketModel = {} as TicketModel;
  bookmark:Bookmark = {} as Bookmark;
  AllComment:CommentModel [] = [];
  formComment:CommentModel = {} as CommentModel;
  display: boolean = false;
  id:number = 0;

ngOnInit(){
  this.getID();
  this.callAPI();
  this.getComment();
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
      this.isBookmarked();
    })
  }
  getComment(){
    this.commentService.getAll().subscribe((response: CommentModel[]) => {
      console.log(response);
      this.AllComment = response;
    })
  }
  isBookmarked(){
    this.bookmarkService.getBookmarked(this.userService.currentUser.id, this.displayTicket.id).subscribe((response: boolean) => {
      this.display = response;
    })
  }

  addComment(){
    this.formComment.userId = this.userService.currentUser.id;
    this.formComment.ticketId = this.displayTicket.id;
    let newComment = {...this.formComment};
    this.commentService.addComment(newComment).subscribe((response) => {
      this.getComment();
      this.formComment = {} as CommentModel;
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
      this.display = !this.display;
    })
  }
  

  getUserEmail(id: number): string | undefined{
    return this.userService.users.find(u => u.id == id)?.email;
  }
  getUser(id:number): string | undefined{
   return this.userService.users.find(u => u.id == id)?.photoUrl;
  }
}
