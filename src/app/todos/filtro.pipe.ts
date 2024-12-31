import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';
import { filtrosValidos } from '../filtro/filtro.action';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(todoList: Todo[], filtro: filtrosValidos): Todo[] {
    switch (filtro) {
      case 'completados':
        return todoList.filter(todo => todo.completado);
      case 'pendientes':
        return todoList.filter(todo => !todo.completado);
      default:
        return todoList;
    }
  }

}
