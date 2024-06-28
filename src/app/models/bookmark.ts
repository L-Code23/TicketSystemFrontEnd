import { TicketModel } from "./ticket-model";

export interface Bookmark {
    id:             number;
    ticketId:       number;
    userBookmarkedId: number;
    userBookmarked: number; //had to add due to mismatch in naming with DTO
    ticket:         TicketModel;
}