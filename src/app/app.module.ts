import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    AddItemComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
