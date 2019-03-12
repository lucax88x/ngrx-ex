import { Component, EventEmitter, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTodoComponent implements OnInit {
  @Output() createTodo = new EventEmitter();

  newTodo: string;

  ngOnInit() {
    this.newTodo = '';
  }

  onSaveTodo() {
    if (this.newTodo) {
      this.createTodo.emit({ text: this.newTodo });
    }
    this.newTodo = '';
  }
}
