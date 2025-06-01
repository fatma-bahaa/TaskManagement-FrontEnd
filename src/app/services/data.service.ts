import { Injectable } from '@angular/core';
import {Task} from '../models/task';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import {Comments} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = `https://jsonplaceholder.typicode.com/comments`;
  constructor(private http: HttpClient) {}
  fetchData(): Observable<Comments[]> {
    return this.http.get<Comments[]>(`${this.baseUrl}`);
  }
}
