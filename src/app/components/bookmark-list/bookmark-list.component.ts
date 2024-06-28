import { Component } from '@angular/core';
import { BookmarkService } from '../../services/bookmark.service';
import { Bookmark } from '../../models/bookmark';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-bookmark-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './bookmark-list.component.html',
  styleUrl: './bookmark-list.component.css'
})
export class BookmarkListComponent {

  constructor(private bookmarkService:BookmarkService, private userService:UserService){}
  AllBookmarks:Bookmark[] = [];
  ngOnInit(){
    this.getBookmarks();
  }
  getBookmarks(){
    this.bookmarkService.getAll().subscribe((response:Bookmark[]) => {
      console.log(response);
      this.AllBookmarks = response;
    })
  }
  deleteBookmark(id: number){
    this.bookmarkService.deleteBookmark(id).subscribe((response) => {
      console.log(response);
      this.getBookmarks();
    })
  }

  getUser(){
    return this.userService.currentUser.id;
  }

  
  
}
