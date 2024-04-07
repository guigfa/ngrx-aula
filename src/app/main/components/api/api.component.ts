import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ExemploService, IExemplo } from './service/api.service';
import { Observable, finalize, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit {
  private service = inject(ExemploService);
  protected isLoading$: Observable<boolean> = this.service.isLoading$;
  protected data$: Observable<IExemplo[]> = this.service.getExemplo();

  ngOnInit(): void {
    
  }
}
