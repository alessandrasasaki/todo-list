import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent {
  selectedPriority = 'low'; //default
  @Input() savedList: any;
  id = Math.floor(Math.random() * 1000); //create a better id generator...

  addItem(description: string, dueDate: string, priority: string) {
    if (!description || !dueDate || !priority) {
      return;
    }

    this.id = this.id + Math.floor(Math.random() * 50);

    const newItem = {
      id: this.id, description, dueDate, priority, done: false
    }

    if (!this.savedList) {
      this.savedList = [newItem];
      localStorage.setItem('todoList', JSON.stringify(this.savedList));
      return;
    }

    const updatedList = [newItem, ...this.savedList];
    localStorage.setItem('todoList', JSON.stringify(updatedList));

    this.savedList.unshift({
      id: this.id,
      description,
      dueDate,
      priority,
      done: false
    });

  }

  changeSelectedPriority(priority: string) {
    if (!priority) {
      return 'low';
    }

    this.selectedPriority = priority;
    return priority;
  }
}
