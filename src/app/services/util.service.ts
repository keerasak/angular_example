import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class UtilService {

  constructor() { }

  public round2(val:number){
    return Math.round(val * 100)/100
  }
}
