import { Component, OnInit } from '@angular/core';
import { LotteryService } from '../services/lottery.service';

@Component({
  selector: 'app-lottery-header',
  templateUrl: './lottery-header.component.html',
  styleUrls: ['./lottery-header.component.scss'],
})
export class LotteryHeaderComponent implements OnInit {
  amountOfAurum : number = 0;

  constructor(public lotteryService: LotteryService) { }

  ngOnInit(): void {
    this.lotteryService.getAurums().subscribe(data => {
      this.amountOfAurum = data.aurums;
    })
  }
}
