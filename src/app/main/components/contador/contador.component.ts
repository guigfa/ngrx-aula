import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  protected lista$: Observable<number[]> = of([]);

  protected adicionar(): void {
    this.lista$ = this.lista$.pipe(
      map(value => value.concat(value.length + 1))
    );
  };

  protected remover(): void {
    this.lista$ = this.lista$.pipe(
      map(value => value.slice(0, value.length - 1))  
    );
  };


}
