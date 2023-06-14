import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from "../item";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  priorityFilter: "all" | "low" | "medium" | "high" = "all";
  @Input() savedList: any;

  get items() {
    if (this.priorityFilter === "all" ) {
      return this.savedList;
    }

    return this.savedList.filter((item: Item) =>
      item.priority === this.priorityFilter
    );
  }

  remove(item: Item) {
    const filteredList = this.savedList.filter((filteredItem: Item) =>
      filteredItem.id !== item.id
    )
    localStorage.setItem('todoList', JSON.stringify(filteredList));
    this.savedList = filteredList;
  }
}
