import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginObj: any = {
    username: '',
    password: '',
  };

  apiLoginObj: any = {
    "username": "",
    "password": "",
  };

  router = inject(Router);
  http = inject(HttpClient);

  onLogin(){
    this.http.post('http://localhost:8081/authenticate', this.apiLoginObj).subscribe((res:any)=>{
      localStorage.setItem('userToken',res.token);
      this.router.navigateByUrl("dashboard");
      }, err => {
      alert("wrong credentials");
    })
  }
}
