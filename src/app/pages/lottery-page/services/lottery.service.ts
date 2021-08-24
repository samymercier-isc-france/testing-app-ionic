import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aurums } from '../models/aurums';
import { SpinResult } from '../models/spin-result';
import { WheelInformations } from '../models/wheel-informations';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {
  constructor(private httpClient: HttpClient) { }

  //returns the amount of aurums
  getAurums = () :Observable<Aurums> => {
    return this.httpClient.get<Aurums>(`assets/fakeAPI/aurums.json`,{responseType: 'json'});
  }

  //get informations about the wheel
  getWheelInfo = ():Observable<WheelInformations> => {
    return this.httpClient.get<WheelInformations>(`assets/fakeAPI/wheelInformations.json`,{responseType: 'json'})
  }

  //asks for the random number and the reward
  spinTheWheel = ():Observable<SpinResult> => {
    return this.httpClient.get<SpinResult>(`assets/fakeAPI/fakeWheelSpinResult.json`, {responseType: 'json'});
  }



  ////////////////////////////////////////////////////////////////
  //////////////////FAKE SERVER///////////////////////////////////
  ////////////////////////////////////////////////////////////////

  //Server should handle that and not front
   //private fakeRewardsList = () => {
   // this.httpClient.get(`assets/fakeAPI/rewards.json`,{responseType: 'json'}).subscribe(data => {
   //   this.rewards = data as Reward[];
   // })
  //}

/** 
  //Server should handle that and not front
  private fakeRandomNumber = () => {
    let generatedNumber = Math.round(Math.random()*359);
    //prevent the result to land between 2 colors to avoid confusion
    if(generatedNumber%(360/this.rewards.length) === 0 ){
      let chooseSide = Math.round(Math.random());
      //make sure it can't be out of range of 0 to 360, -1 and 361 would cause an error
      if(generatedNumber === 360 || (chooseSide === 0 && generatedNumber != 0 )){
        generatedNumber--;
       }else{
        generatedNumber++;
      }
    }
    return generatedNumber;
  }

  private fakeFindReward = () => {
    let generatedNumber = this.fakeRandomNumber();
    // divide the number by 15 (because 360 degree/ 24 slices = 15), and round it up
    let foundNumber = Math.ceil(generatedNumber/(360/this.rewards.length));
    //return the right price, 24 - right number because wheel result is mirrored
    return this.rewards[this.rewards.length-foundNumber] as Reward;
  }
  */

}
