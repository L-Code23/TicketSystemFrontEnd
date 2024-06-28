import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicketModel } from '../../models/ticket-model';
import { UserService } from '../../services/user.service';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent {
  @Output() Submitted = new EventEmitter<TicketModel>();
  constructor(private userService:UserService){}
 formTicket: TicketModel = {} as TicketModel;

 isLoggedIn(){
  return this.userService.loggedIn;
 }

 emitSubmitted(){
  this.formTicket.isOpen = true;
  this.formTicket.userOpenedId = this.userService.currentUser.id;
  let newTicket:TicketModel = {...this.formTicket};
  this.Submitted.emit(newTicket);
  this.formTicket = {} as TicketModel;
  
}
}
