import { Action, ActionReducerMap } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import { todoReducer } from "./todos/todo.reducer";
import { filtrosValidos } from "./filtro/filtro.action";
import { filtroReducer } from "./filtro/filtro.reducer";

export interface AppState {
    todos: Todo[];
    filtro: filtrosValidos;

}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}