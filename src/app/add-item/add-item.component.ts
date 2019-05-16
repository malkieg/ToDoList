import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  items: string[] = [];
  completed: string[] = [];
  item: string;


  constructor() {
  }

  ngOnInit() {
  }

  addItem() {
    if (this.item) {
      this.items.push(this.item);
      this.item = '';
    }
  }

  deleteItem(item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === item) {
        this.items.splice(i, 1);
      }
    }
  }
  editItem(item) {
    this.item = item;
    this.deleteItem(item);
  }
  itemCompleted(item) {
    this.completed.push(item);
    this.deleteItem(item);
  }
}
