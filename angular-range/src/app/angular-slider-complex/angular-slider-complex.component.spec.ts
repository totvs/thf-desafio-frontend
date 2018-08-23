import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSliderComplexComponent } from './angular-slider-complex.component';

describe('AngularSliderComplexComponent', () => {
  let component: AngularSliderComplexComponent;
  let fixture: ComponentFixture<AngularSliderComplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSliderComplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSliderComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
