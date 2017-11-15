import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBidPageComponent } from './car-bid-page.component';

describe('CarBidPageComponent', () => {
  let component: CarBidPageComponent;
  let fixture: ComponentFixture<CarBidPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarBidPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarBidPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
