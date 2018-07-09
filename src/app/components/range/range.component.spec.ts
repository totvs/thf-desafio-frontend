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
      minValue: 1,
      maxValue: -100,
      disabled: false,
      showValues: true
    };

    component.rangeSliderForm = formBuilder.group({
      'inpMinRange': [{
        value: component.config['initialMinValue'] || component.config['minValue'],
        disabled: component.config.disabled
      }],
      'inpMaxRange': [{
        value: component.config['initialMaxValue'] || component.config['maxValue'],
        disabled: component.config.disabled
      }]
    });

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

  it('config.maxValue should be a number', () => {
    expect(component.config.maxValue).toEqual(jasmine.any(Number));
  });


});
