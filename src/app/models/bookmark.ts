import { TicketModel } from "./ticket-model";

export interface Bookmark {
    id:             number;
    ticketId:       number;
    userBookmarked: string;
    ticket:         TicketModel;
}