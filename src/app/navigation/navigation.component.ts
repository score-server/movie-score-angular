import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../data/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(value => this.user = value);
  }

}
