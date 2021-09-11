import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("my_input", { static: true }) myInput!: ElementRef;
  title = "My To Do List";
  list: any[] = ["Hit the gym", "Pay bills", "Meet George", "Buy eggs", "Read a book", "Organize office"];

  enterPress(e: KeyboardEvent) {
    if (e.key == "Enter") {
      this.addToDo();
    }
  }
  addToDo() {
    var inputValue = this.myInput.nativeElement.value;
    if (inputValue == "") {
      alert("You must write something!");
    }
    else if (this.list.indexOf(inputValue) != -1) {
      alert("This task has been existed!");
    }
    else {
      this.list.push(inputValue);
      this.myInput.nativeElement.value = "";
    }
  }

  hasBeenDone(e: MouseEvent) {
    var classList = (e.target as HTMLElement).classList;
    if (classList[0] == 'checked') {
      classList.remove("checked");
    }
    else {
      classList.add("checked");
    }

  }

  removeToDo(removeIndex: number) {
    this.list.splice(removeIndex, 1);
  }
}
