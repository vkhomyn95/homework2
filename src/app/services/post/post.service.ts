import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/Post';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostsToUser(userId): Observable<Post[]> {
    return this.httpClient
      .get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }

  getSinglePost(postId): Observable<Post[]> {
    return this.httpClient
      .get<Post[]>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  getCommentsOfSinglePost(postId): Observable<Comment[]>{
    return this.httpClient
      .get<Comment[]>(`https://jsonplaceholder.typicode.com/comments/?postId=${postId}`);
  }
}
