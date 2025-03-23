import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { NgFor } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, HeaderComponent, UserComponent, TasksComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  username = '';

  onSelectUser(id: string) {
    if (id) {
      this.username = this.users.find(u => u.id === id)?.name || '';
    }
  }
}
