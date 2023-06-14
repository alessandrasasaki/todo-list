import { Component } from '@angular/core';
import { Item } from "../item";
import { allItems } from '../items.mock';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  filter: "all" | "active" | "done" = "all";

  get items() {
    if (this.filter === "all") {
      return allItems;
    }
    return allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  remove(item: Item) {
    allItems.splice(allItems.indexOf(item), 1);
  }
}
