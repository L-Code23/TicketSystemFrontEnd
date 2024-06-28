import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bookmark } from '../models/bookmark';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor(private http:HttpClient) { }
  url: string = "https://localhost:7204/";

  getAll():Observable<Bookmark[]>{
    return this.http.get<Bookmark[]>(`${this.url}api/Bookmark`);
  }
  getById():Observable<Bookmark>{
    return this.http.get<Bookmark>(`${this.url}api/Bookmark`);
  }
  getBookmarked(userId:number, ticketId:number):Observable<boolean>{
    return this.http.get<boolean>(`${this.url}api/Bookmark/bookmarked?userId=${userId}&ticketId=${ticketId}`);
  }
  addBookmark(b: Bookmark):Observable<Bookmark>{
    return this.http.post<Bookmark>(`${this.url}api/Bookmark`, b)
  }
  deleteBookmark(id: number):Observable<void>{
    return this.http.delete<void>(`${this.url}api/Bookmark/${id}`)
  }
}
