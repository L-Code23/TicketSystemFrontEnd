export interface TicketModel {
    id:         number;
    title:      string;
    body:       string;
    userOpened: number;
    userClosed: number;
    isOpen:     boolean;
    resolution: string;
}
