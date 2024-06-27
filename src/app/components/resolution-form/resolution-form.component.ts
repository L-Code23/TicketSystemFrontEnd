import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TicketModel } from '../../models/ticket-model';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-resolution-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './resolution-form.component.html',
  styleUrl: './resolution-form.component.css'
})
export class ResolutionFormComponent {
@Output() Submitted = new EventEmitter<TicketModel>();
@Input() formTicket: TicketModel = {} as TicketModel;
constructor(private userService:UserService){}

emitSubmitted(){
  this.formTicket.isOpen = false;
  this.formTicket.userClosed = this.userService.user.email;
  this.Submitted.emit(this.formTicket);
}
} 
