import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit(e): void {
    e.preventDefault();
    this.userService.login(this.loginFormGroup.controls.username.value, this.loginFormGroup.controls.password.value);
    // location.href = '/';
  }
}

