import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { TicketModel } from '../../models/ticket-model';
import { RouterLink } from '@angular/router';
import { TicketFormComponent } from '../ticket-form/ticket-form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [RouterLink, TicketFormComponent, FormsModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {
constructor(private ticketService: TicketService){}

allTickets: TicketModel[] = [];

ngOnInit(){
  this.getTicket();
}

getTicket(){
  this.ticketService.getAll().subscribe((response: TicketModel[])=>{
    console.log(response);
    this.allTickets = response;
  });
}
addTicket(t: TicketModel){
  this.ticketService.addTicket(t).subscribe((response: TicketModel) =>{
    console.log(response);
  this.getTicket();
  })
 }
 
}
