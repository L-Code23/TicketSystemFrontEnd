import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { TicketModel } from '../../models/ticket-model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [RouterLink],
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

}
