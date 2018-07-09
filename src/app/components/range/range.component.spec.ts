import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeComponent } from './range.component';

describe('RangeComponent', () => {
  let component: RangeComponent;
  let fixture: ComponentFixture<RangeComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeComponent);
    component = fixture.componentInstance;

    component.config = {
      minValue: 0,
      initialMinValue: 0,
      maxValue: 100,
      initialMaxValue: 100,
      disabled: false,
      showValues: true
    };

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('config param should be not undefined', () => {
    expect(component.config).toBeDefined();
  });

  it('config.minValue should be a number', () => {
    expect(component.config.minValue).toEqual(jasmine.any(Number));
  });

  it('config.minValue should be a positive number or 0', () => {
    expect(component.config.minValue).toBeGreaterThanOrEqual(0);
  });

  it('config.maxValue should be a number', () => {
    expect(component.config.maxValue).toEqual(jasmine.any(Number));
  });

  it('config.maxValue should be a positive number or 0', () => {
    expect(component.config.maxValue).toBeGreaterThanOrEqual(0);
  });

  it('config.initialMinValue should be greater or equal than config.minValue and less than config.maxValue', () => {
    const initialMinValue = component.config.initialMinValue;
    const minValue = component.config.minValue;
    const maxValue = component.config.maxValue;
    const fn = initialMinValue >= minValue && initialMinValue < maxValue;
    expect(fn).toBeTruthy();
  });

  it('config.initialMaxValue should be less or equal than config.maxValue and greater than config.minValue', () => {
    const initialMaxValue = component.config.initialMaxValue;
    const minValue = component.config.minValue;
    const maxValue = component.config.maxValue;
    const fn = initialMaxValue <= maxValue && initialMaxValue > minValue;
    expect(fn).toBeTruthy();
  });

});
