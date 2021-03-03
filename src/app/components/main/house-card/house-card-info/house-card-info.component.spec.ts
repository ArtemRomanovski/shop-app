import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCardInfoComponent } from './house-card-info.component';

describe('HouseCardInfoComponent', () => {
  let component: HouseCardInfoComponent;
  let fixture: ComponentFixture<HouseCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseCardInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
