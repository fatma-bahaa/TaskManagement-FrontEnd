import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../../models/task';
import {DataService} from '../../services/data.service';
import {Comments} from '../../models/comment';
import {NgForOf} from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-dashboard',
  imports: [
    RouterOutlet,
    NgForOf
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  // tasks: Task[]=[];
  tasks: Comments[]=[];
  constructor(private http: HttpClient, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.fetchData();
    // this.loadTasks();
  }
  fetchData() {
    this.dataService.fetchData().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  loadTasks(){
    this.http.get('http://localhost:8081/task').subscribe((res:any)=>{
      console.log(res);
      this.tasks = res.data;
    }, err => {
      // alert("Error occured");
    })
  }
}
