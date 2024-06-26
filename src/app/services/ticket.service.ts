import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TicketModel } from '../models/ticket-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }
  url: string = "https://localhost:7204/";//Ramsey
  //Kyra = same url?
  //Ben = same url?
  //Ali = same url?

  getAll():Observable<TicketModel[]>{
    return this.http.get<TicketModel[]>(`${this.url}api/Ticket`);
  }

  getById(id:number):Observable<TicketModel>{
    return this.http.get<TicketModel>(`${this.url}api/Ticket/${id}`);
  }

  updateTicket(ticket: TicketModel):Observable<void>{
    return this.http.put<void>(`${this.url}api/Ticket/${ticket.id}` ,ticket);
  }

  addTicket(ticket: TicketModel):Observable<TicketModel>{
    return this.http.post<TicketModel>(`${this.url}api/Ticket/` ,ticket);
  }

  deleteTicket(ticket: TicketModel):Observable<void>{
    return this.http.delete<void>(`${this.url}api/Ticket/${ticket.id}`);
  }
    



}
