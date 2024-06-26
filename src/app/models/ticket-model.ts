export interface TicketModel {
    id:         number;
    title:      string;
    body:       string;
    userOpened: string;
    userClosed: string;
    isOpen:     boolean;
    resolution: string;
}
