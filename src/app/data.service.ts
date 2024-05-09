import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Observable<any>{
    return of('Data from DataService').pipe(
      delay(2000)
    );
  }
}