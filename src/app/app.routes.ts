import { Routes } from '@angular/router';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { BookmarkListComponent } from './components/bookmark-list/bookmark-list.component';

export const routes: Routes = [
    {path:"", component:TicketListComponent},
    {path:"details/:id", component:TicketDetailsComponent},
    {path:"Bookmark", component:BookmarkListComponent}
];
