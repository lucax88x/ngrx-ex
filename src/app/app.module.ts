import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatRadioModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { metaReducers } from './app.meta-reducers';
import { reducers } from './store/reducers.models';
import { CompleteTodoListComponent } from './todos/components/complete-todo-list/complete-todo-list.component';
import { NewTodoComponent } from './todos/components/new-todo/new-todo.component';
import { TodoListItemComponent } from './todos/components/todo-list-item/todo-list-item.component';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';
import { TodosEffects } from './todos/effects/todos.effects';

@NgModule({
  declarations: [
    AppComponent,
    NewTodoComponent,
    TodoListComponent,
    TodoListItemComponent,
    CompleteTodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([TodosEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
