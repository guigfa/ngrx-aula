import { createReducer, on } from "@ngrx/store";
import { exemploLoading, loadExemplo, setExemplo } from "../actions/exemplo.actions";
import { IExemplo } from "../../main/components/api/service/api.service";

export interface IExemploReducer {
  exemplos?: IExemplo[];  
  isLoading?: boolean;
};

const initialState: IExemploReducer = {
    exemplos: [],
    isLoading: false
};

export const exemploReducers = createReducer(
    initialState,
    on(loadExemplo, state => ({ 
        ...state 
      })
    ),
    on(setExemplo, (state, { exemplos }) => ({ 
        ...state, 
        exemplos 
      })
    ),
    on(exemploLoading, (state, { isLoading }) => ({
        ...state,
        isLoading
      })
    )
)