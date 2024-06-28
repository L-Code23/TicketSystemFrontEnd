import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentModel } from '../models/comment-model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  url: string = "https://localhost:7204/";

  getAll():Observable<CommentModel[]>{
    return this.http.get<CommentModel[]>(`${this.url}api/Comment`);
  }
  addComment(c:CommentModel):Observable<CommentModel>{
    return this.http.post<CommentModel>(`${this.url}api/Comment`, c);
  }
}
