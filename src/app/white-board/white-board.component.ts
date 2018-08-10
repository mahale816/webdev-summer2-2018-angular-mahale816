import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private userService: UserServiceClient,
              private router: Router) { }

  username = '';

  logout() {
    this.service.logout()
      .then(() => {
        this.router.navigate(['login']);
      });
  }

  ngOnInit() {
    this.userService
      .profile()
      .then(user => {
        this.username = user.username;
      });
  }
}
