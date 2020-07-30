import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DormCardComponent } from './dorm-card.component';

describe('DormCardComponent', () => {
  let component: DormCardComponent;
  let fixture: ComponentFixture<DormCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
