import { createAction, props } from "@ngrx/store";
import { IExemplo } from "../../main/components/api/service/api.service";

export const loadExemplo = createAction('[Exemplo] Load Exemplo');
export const setExemplo = createAction('[Exemplo] Set Exemplo', props<{ exemplos: IExemplo[] }>());
export const exemploSuccess = createAction('[Exemplo] [Success] Load Exemplo');
export const exemploFailure = createAction('[Exemplo] [Failure] Load Exemplo');
export const exemploLoading = createAction('[Exemplo] [Loading] Load Exemplo', props<{ isLoading: boolean }>());