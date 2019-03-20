import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private userService: UserService) {
    this.username = 'mongo';
    this.password = '';
  }

  ngOnInit() {
  }

  submit(): void {
    alert(this.username + ' ' + this.password);
    this.userService.login(this.username, this.password);
    location.href = '/';
  }
}
