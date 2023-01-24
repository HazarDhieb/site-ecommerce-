import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaranteesComponent } from './garantees.component';

describe('GaranteesComponent', () => {
  let component: GaranteesComponent;
  let fixture: ComponentFixture<GaranteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaranteesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaranteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
