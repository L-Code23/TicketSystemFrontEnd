export interface TicketModel {
    id:         number;
    title:      string;
    body:       string;
    userOpenedId: number;
    userOpened: number;//dto naming issues
    userClosed: number;
    isOpen:     boolean;
    resolution: string;
}
