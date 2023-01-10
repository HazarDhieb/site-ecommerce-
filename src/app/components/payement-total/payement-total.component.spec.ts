import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementTotalComponent } from './payement-total.component';

describe('PayementTotalComponent', () => {
  let component: PayementTotalComponent;
  let fixture: ComponentFixture<PayementTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayementTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayementTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
