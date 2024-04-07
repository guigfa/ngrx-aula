import { Injectable, inject } from "@angular/core";
import { ExemploService } from "../../main/components/api/service/api.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { finalize, map, of, switchMap, tap, withLatestFrom } from "rxjs";
import { exemploLoading, exemploSuccess, loadExemplo } from "../actions/exemplo.actions";
import { IAppState } from "../store";

@Injectable({
    providedIn: 'root'
})
export class ExemplosEffect {
    private service = inject(ExemploService);
    private actions$ = inject(Actions);
    private store = inject(Store);


    _loadMore = createEffect(() => this.actions$.pipe(
        ofType(loadExemplo),
        withLatestFrom(this.store.pipe(map((state: IAppState) => state.apiExemplo.exemplos))),
        switchMap(([, exemplos]) => {
            if(!exemplos?.length) {
                return this.service.getExemplo().pipe(
                    map(exemplos => ({ type: '[Exemplo] Set Exemplo', exemplos })),
                )
            }
            return of(exemploSuccess());
        },
        ),
        tap(() => this.store.dispatch(exemploSuccess()))
    ));
}