import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { SpinResult } from '../models/spin-result';
import { WheelInformations } from '../models/wheel-informations';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {
  constructor(private httpClient: HttpClient) { }

  //get informations about the wheel
  getWheelInfo = ():Observable<WheelInformations> => {
    return this.httpClient.get<WheelInformations>(`assets/fakeAPI/wheelInformations.json`,{responseType: 'json'})
  }

  //asks for the random number and the reward
  spinTheWheel = ():Observable<SpinResult> => {
    return this.httpClient.post<SpinResult>(`http://localhost:8080/lottery`,{"accountId":1,"wheelName":"main"});
  }

}
