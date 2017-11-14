import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCardPropertyComponent } from './car-card-property.component';

describe('CarCardPropertyComponent', () => {
  let component: CarCardPropertyComponent;
  let fixture: ComponentFixture<CarCardPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarCardPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCardPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
