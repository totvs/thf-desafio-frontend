import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSliderComponent } from './angular-slider.component';

describe('AngularSliderComponent', () => {
  let component: AngularSliderComponent;
  let fixture: ComponentFixture<AngularSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AngularSliderComponent,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('init should be greater than, or equal to minimum', async(() => {
    component.minimum = 10;
    component.init = 0;
    component.preCheckValues ();
    expect(component.init).toEqual(component.minimum);
  }));

  it('end should be less than, or equal to maximum', async(() => {
    component.maximum = 90;
    component.end = 1000;
    component.preCheckValues ();
    expect(component.end).toEqual(component.end);
  }));

  it('step should NOT be less than zero', async(() => {
    component.step = -1;
    component.preCheckValues ();
    expect(component.step).toEqual(1);
  }));

  it('step should NOT be equals than zero', async(() => {
    component.step = 0;
    component.preCheckValues ();
    expect(component.step).toEqual(1);
  }));

  it('step should NOT be greater than maximum', async(() => {
    component.step = 110;
    component.maximum = 100;
    component.preCheckValues ();
    expect(component.step).toEqual(component.maximum);
  }));

  it('disables should be false by default', async(() => {
    component.disabled = undefined;
    component.preCheckValues ();
    expect(component.disabled).toEqual(false);
  }));

  it('init should NOT be greater than maximum', async(() => {
    component.init = 10;
    component.end = 9;
    component.evaluatePositions ();
    expect(component.init).toBeLessThanOrEqual(component.end);
  }));

  it('minimum should NOT be less than maximum', async(() => {
    component.minimum = 5;
    component.maximum = 4;
    component.preCheckValues ();
    expect(component.minimum).toBeLessThanOrEqual(component.maximum);
  }));
});
