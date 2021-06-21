import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  loggerList:Observable<string[]> = of([]); 
  constructor() { 
  }
  Log(value:string){
    this.loggerList.subscribe({
      next(obj){
        obj.unshift(value);
      }
    })
  }  
}
