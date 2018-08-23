import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSliderComponent } from './angular-slider.component';

describe('AngularSliderComponent', () => {
  let component: AngularSliderComponent;
  let fixture: ComponentFixture<AngularSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
