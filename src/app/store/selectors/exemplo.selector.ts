import { createSelector } from "@ngrx/store";
import { IAppState } from "../store";

export const exemploSelector = createSelector((state: IAppState) => state.apiExemplo, (apiExemplo) => apiExemplo.isLoading);