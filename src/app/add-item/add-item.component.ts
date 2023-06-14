import { Component } from '@angular/core';
import { allItems } from '../items.mock';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent {
  addItem(description: string) {
    allItems.unshift({
      description,
      done: false
    });
  }
}
