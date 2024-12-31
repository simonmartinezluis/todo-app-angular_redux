import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from 'src/app/models/todo.model';
import { borrar, editar, toggle } from '../todo.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem?: Todo;
  checkCompletado: FormControl;
  txtInput: FormControl;
  editando: boolean = false;
  @ViewChild('inputFisico') txtInputFisico?: ElementRef;

  constructor(private readonly store: Store<AppState>) {
    this.checkCompletado = new FormControl();
    this.txtInput = new FormControl('', Validators.required);

  }

  ngOnInit(): void {
    if (this.todoItem) {
      this.checkCompletado.setValue(this.todoItem?.completado);
      this.txtInput.setValue(this.todoItem?.texto);
      this.checkCompletado.valueChanges.subscribe(() => {
        this.store.dispatch(toggle({ id: Number(this.todoItem?.id) }))
      });
    }
  }

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todoItem?.texto);
    setTimeout(() => {
      this.txtInputFisico?.nativeElement.select();
    }, 100);
  }

  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.invalid) { return; }
    if (this.txtInput.value === this.todoItem?.texto) { return; }
    this.store.dispatch(editar({ id: Number(this.todoItem?.id), texto: this.txtInput.value }));
  }

  borrarTodo() {
    this.store.dispatch(borrar({ id: Number(this.todoItem?.id) }))
  }
}
