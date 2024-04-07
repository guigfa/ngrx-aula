import { createReducer, on } from "@ngrx/store";
import { adicionar, remover } from "../actions/contador.actions";

export interface IContadorReducer {
    contador: number[];
}

const initialState: IContadorReducer = {
    contador: []
};

export const contadorReducers = createReducer(
    initialState,
    on(adicionar, state => ({
        ...state,
        contador: [...state.contador, state.contador.length]
    })),
    on(remover, state => ({
        ...state,
        contador: state.contador.filter((_, i) => i !== state.contador.length - 1)
    }))
)