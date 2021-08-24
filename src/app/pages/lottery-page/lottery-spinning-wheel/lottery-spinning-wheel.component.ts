import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { trigger,state,style,animate,transition } from '@angular/animations';
import { Reward } from '../models/reward';
import { LotteryService } from '../services/lottery.service';

@Component({
  selector: 'app-lottery-spinning-wheel',
  templateUrl: './lottery-spinning-wheel.component.html',
  styleUrls: ['./lottery-spinning-wheel.component.scss'],
  animations: [
    trigger('spinningWheel', [
      //makes the wheel spin to a certain amount of degrees in 5 seconds
      state('spin', style({
        //get the rotation from a param to allow dynamic changes
        transform: '{{rotation_number}}'
      }), {params : {rotation_number : 'rotate(1800deg)'}}),
      //sets animation duration time from any state to spinning state
      transition('* => spin', [
        //spin the wheel 5 seconds with a non linear speed, it slows down near the end of the time
        animate('5s ease-out')
      ]),
    ]),
  ],
})
export class LotterySpinningWheelComponent implements OnInit {
//Cost in aurum to spin the wheel
spinningCost = 0;
  
//store a potential winning item and message
winningItem : Reward = new Reward(0, '', 0);
winningMessage: string = '';

//state of the wheel, if it is spinning or not to disable the button
isSpinning = '';

//stores how much the wheel have to spin to match what the user won
rotation = 'rotate(0deg)';

constructor(private httpClient: HttpClient, public lotteryService: LotteryService){ }

ngOnInit(): void {
  this.lotteryService.getWheelInfo().subscribe(data => {
    this.spinningCost = data.spinningCost;
  })
}

//called when the button to spin the wheel is clicked
onSpin = () => {
  this.lotteryService.spinTheWheel().subscribe(data => {
    let SpinResult = data;
    this.rotation = this.changeRotationFormat(SpinResult.randomNumber);
    this.isSpinning = 'spin';
    this.winningItem = SpinResult.reward;
    setTimeout( () => {
    this.winningMessage = this.showPriceMessage(this.winningItem);
  },6000)
  })
}

changeRotationFormat = (rotation: number) => {
  return 'rotate(' + (1800 + rotation) +'deg)';
}

//Display a message depending on the reward
showPriceMessage = (reward :Reward) => {
  let message: string = '';
  if(reward.rewardRarity === 0){
       message = "You didn't win anything :(";
    }else if(reward.rewardRarity === 1) {
      message = "You won only " + reward.amount + " " + reward.item + " :(";
    }else if(reward.rewardRarity === 2){
      message = "You won authorisation to play again";
    }else if(reward.rewardRarity === 3){
      message = "You won " + reward.amount + " " + reward.item + "!";
    }else if(reward.rewardRarity === 4){
      message = "JACKPOT !!!!! " + reward.amount + " " + reward.item + "!"
    }else{
      message = "unknown won price message"
    }
  return message;
}


//reset all class attribute to be able to spin the wheel again without a page refresh
resetWheel = () => {
  //reset wheel state to stop spinning for button to be usable again
  this.isSpinning = "";
  //resets the wheel rotation to default state
  this.rotation = 'rotate(0deg)';
  //reset the winning message
  this.winningMessage = '';
  //reset the won reward
  this.winningItem = new Reward(0, '', 0);
}
  

}
