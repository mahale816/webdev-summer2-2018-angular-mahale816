import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username;
  password;
  password2;
  register(username, password, password2) {
      if (password === password2) {
      this.service
        .findUserByUsername(username)
        .then(newUser => {
          if (newUser === null) {
            console.log(newUser);
            this.service
              .createUser(username, password)
              .then(() =>
                this.router.navigate(['home']));
          } else {
            alert('Username already exists');
          }
        });
    } else {
      alert('Password and verify password don\'t match!');
    }
  }

  ngOnInit() {
  }

}
