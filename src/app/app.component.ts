import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "My To Do List";
  list: any[] = ["Hit the gym", "Pay bills", "Meet George", "Buy eggs", "Read a book", "Organize office"];
}
