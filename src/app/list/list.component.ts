import { Component, Input } from '@angular/core';
import { Item } from "../item";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  priorityFilter: "all" | "low" | "medium" | "high" = "all";
  @Input() savedList: any;

  myLocalStorage = localStorage.getItem('todoList');
  originalList = this.myLocalStorage ? JSON.parse(this.myLocalStorage) : null;

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

  searchDescription(term: string) {
    this.resetSearch();
    this.savedList = this.savedList.filter((item: Item) =>
    item.description.includes(term)
  );
  }

  resetSearch() {
    this.savedList = this.originalList; //reset old filter
  }
}
