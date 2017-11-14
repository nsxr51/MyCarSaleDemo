import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadNavBarComponent } from './head-nav-bar.component';

describe('HeadNavBarComponent', () => {
  let component: HeadNavBarComponent;
  let fixture: ComponentFixture<HeadNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
