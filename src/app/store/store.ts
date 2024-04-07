import { ActionReducerMap } from "@ngrx/store";
import { IExemploReducer, exemploReducers } from "./reducers/exemplo.reducer";
import { IContadorReducer, contadorReducers } from "./reducers/contador.reducer";

export interface IAppState {
    apiExemplo: IExemploReducer,
    contadorExemplo: IContadorReducer
};

export const reducers: ActionReducerMap<IAppState> = {
    apiExemplo: exemploReducers,
    contadorExemplo: contadorReducers
};