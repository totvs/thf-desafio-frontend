import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-range',
  templateUrl: 'range.component.html',
  styleUrls: ['range.component.scss']
})
export class RangeComponent implements OnInit {

  public rangeConfig: any; // TODO: create a interface to describe fields and its values
  public rangeSliderForm: FormGroup;

  public minRangeControl: AbstractControl;
  public maxRangeControl: AbstractControl;

  public NAME_INP_MIN_RANGE = 'inpMinRange';
  public NAME_INP_MAX_RANGE = 'inpMaxRange';

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.initRangeSlideForm();
    this.setObservables();
  }

  private initRangeSlideForm(): void {
    this.rangeSliderForm = this.fb.group({
      'inpMinRange': [ 0 ],
      'inpMaxRange': [ 20 ]
    });

    this.minRangeControl = this.rangeSliderForm.get(this.NAME_INP_MIN_RANGE);
    this.maxRangeControl = this.rangeSliderForm.get(this.NAME_INP_MAX_RANGE);
  }

  private setObservables(): void {
    this.minRangeControl.valueChanges.subscribe(value => this.rangeInpMinChangeEventHandler(value));
    this.maxRangeControl.valueChanges.subscribe(value => this.rangeInpMaxChangeEventHandler(value));
  }

  private rangeInpMinChangeEventHandler(value: number): void {
    let maxControlValue: number = this.maxRangeControl.value;
    if (value > maxControlValue) {
      this.minRangeControl.patchValue(maxControlValue--);
    }
  }

  private rangeInpMaxChangeEventHandler(value: number): void {
    let minControlValue: number = this.minRangeControl.value;
    if (value < minControlValue) {
      this.maxRangeControl.patchValue(minControlValue++);
    }
  }

}
