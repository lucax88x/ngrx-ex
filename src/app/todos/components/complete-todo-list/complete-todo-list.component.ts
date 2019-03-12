import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Todo } from '../../models/todos.models';

@Component({
  selector: 'app-complete-todo-list',
  templateUrl: './complete-todo-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompleteTodoListComponent {
  @Input() todos: Todo[];
}
