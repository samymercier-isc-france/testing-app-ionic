import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LotterySpinningWheelComponent } from './lottery-spinning-wheel.component';

describe('LotterySpinningWheelComponent', () => {
  let component: LotterySpinningWheelComponent;
  let fixture: ComponentFixture<LotterySpinningWheelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LotterySpinningWheelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LotterySpinningWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
