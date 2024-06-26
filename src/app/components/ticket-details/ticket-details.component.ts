import { Component, Input } from '@angular/core';
import { TicketModel } from '../../models/ticket-model';
import { HttpClient } from '@angular/common/http';
import { TicketService } from '../../services/ticket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-details',
  standalone: true,
  imports: [],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css'
})
export class TicketDetailsComponent {
  constructor(private ticketService: TicketService, private activatedRoute: ActivatedRoute){}
  @Input() displayTicket: TicketModel = {} as TicketModel;
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

}
