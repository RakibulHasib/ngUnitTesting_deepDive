import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(
    private _loggerService: LoggerService
  ){}

  add(n1: number, n2: number){
    let result = n1 + n2;
    this._loggerService.log('Add operation is called');
    return result;
  }

  subtract(n1: number, n2: number){
    let result = n1 - n2;
    this._loggerService.log('Subtract operation is called');
    return result;
  }
}
