import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTodoListComponent } from './complete-todo-list.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Todo } from '../../models/todos.models';

describe('CompleteTodoListComponent', () => {
  let component: CompleteTodoListComponent;
  let fixture: ComponentFixture<CompleteTodoListComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteTodoListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteTodoListComponent);
    component = fixture.componentInstance;

    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ul', () => {
    let ul: DebugElement;
    beforeEach(() => {
      ul = debugElement.query(By.css('ul'));
    });

    it('should render no childs', () => {
      // given
      component.todos = [];

      fixture.detectChanges();

      // then
      expect(ul.children.length).toBe(0);
    });

    it('should render 2 childs', () => {
      // given
      const todo1 = new Todo('1', 'todo1');
      const todo2 = new Todo('2', 'todo2');
      component.todos = [todo1, todo2];

      fixture.detectChanges();

      // then
      expect(ul.children.length).toBe(2);
    });
  });
});
