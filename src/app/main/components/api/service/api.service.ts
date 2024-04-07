import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject, Observable, delay, finalize, map, of, take, tap } from "rxjs";
import { exemploLoading } from "../../../../store/actions/exemplo.actions";

export interface IExemplo {
    userId: number;
    id: number;
    title: string;
    body: string;
}

@Injectable({
    providedIn: 'root'
})
export class ExemploService {
    private http = inject(HttpClient);
    private store = inject(Store);

    public getExemplo(): Observable<IExemplo[]> {
        return this.http.get<IExemplo[]>('https://jsonplaceholder.typicode.com/posts')
            .pipe(
                tap(() => this.store.dispatch(exemploLoading({ isLoading: true }))),
                delay(5000),
                finalize(() => this.store.dispatch(exemploLoading({ isLoading: false })))
            );
    };
}