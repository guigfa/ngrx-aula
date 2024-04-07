import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { BehaviorSubject, Observable, delay, finalize, map, of, take, tap } from "rxjs";

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
    private subject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isLoading$: Observable<boolean> = this.subject.asObservable();

    public getExemplo(): Observable<IExemplo[]> {
        return this.http.get<IExemplo[]>('https://jsonplaceholder.typicode.com/posts')
            .pipe(
                tap(() => this.setIsLoading(true)),
                delay(2000),
                finalize(() => this.setIsLoading(false)),
            );
    };

    public setIsLoading(isLoading: boolean): void {
        this.subject.next(isLoading);
    }
}