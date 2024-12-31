import { createAction, props } from "@ngrx/store";

export const limpiarTodos = createAction(
    '[TODO] Limpiar completados'
);
export const crear = createAction(
    '[TODO] Crea Todo',
    props<{ text: string }>()
);

export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number }>()
);

export const editar = createAction(
    '[TODO] Editar Todo',
    props<{ id: number, texto: string }>()
);

export const borrar = createAction(
    '[TODO] Borrar Todo',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[TODO] Marcar All Todo',
    props<{ completado: boolean }>()
);