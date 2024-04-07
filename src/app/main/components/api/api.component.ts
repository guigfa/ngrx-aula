import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ExemploService, IExemplo } from './service/api.service';
import { Observable, finalize, map, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadExemplo } from '../../../store/actions/exemplo.actions';
import { IExemploReducer } from '../../../store/reducers/exemplo.reducer';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit {
  private store = inject(Store<{ apiExemplo: IExemploReducer }>);
  protected isLoading$: Observable<boolean> = this.store.pipe(map(state => state.apiExemplo.isLoading));
  protected data$: Observable<IExemplo[]> = this.store.pipe(map(state => state.apiExemplo.exemplos));

  ngOnInit(): void {
    this.store.dispatch(loadExemplo());
  }
}

