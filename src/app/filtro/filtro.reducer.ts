import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.action';

export const inicialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer(inicialState as filtrosValidos,
    on(setFiltro, (state, { filtro }) => filtro),
)

export function filtroReducer(state: any, action: any) {
    return _filtroReducer(state, action);
}