import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { crear } from '../todo.action';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);

  }

  agregarTodo() {
    if (this.txtInput.invalid) { return; }
    this.store.dispatch(crear({ text: this.txtInput.value }));
    console.log(this.txtInput.value);
    this.txtInput.reset();
  }
}
