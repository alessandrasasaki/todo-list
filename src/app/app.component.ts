import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo';
  myLocalStorage = localStorage.getItem('todoList');
  savedList = this.myLocalStorage ? JSON.parse(this.myLocalStorage) : null;
}
