import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private route: Router,
              private userService: UserServiceClient) { }

  login = (username, password) => {
    const user = {
      username: username,
      password: password
    };
    this.userService.login(user)
      .then(u => this.route.navigate(['profile']));
  }

  ngOnInit() {
  }

}
