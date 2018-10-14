import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
    usuarios: reducers.UsuariosState;
}

export const appReducer: ActionReducerMap<AppState> = {
    usuarios: reducers.usuariosReducer
};
