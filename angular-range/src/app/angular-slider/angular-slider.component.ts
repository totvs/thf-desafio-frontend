import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-angular-slider',
  templateUrl: './angular-slider.component.html',
  styleUrls: ['./angular-slider.component.css']
})

export class AngularSliderComponent implements OnInit {

  /*
  minimum and maximum: variables that control the min and max values on the range.
  init and end: variables that handle the thumbs value (the current value from each slider)
  step: controls how much will the slide move when dragged.
  showValues: a boolean variable responsible for showing or hiding the current thumbs values.
  disabled: a boolean variable responsible for disabling and enabling the input.
  */

  @Input() minimum: number;
  @Input() maximum: number;
  @Input() init: number;
  @Input() end: number;
  @Input() step: number;
  @Input() showValues: boolean;
  @Input() disabled: boolean;
  @Input() label: string;
  @Output() sendValues = new EventEmitter();

  temp: number;

  constructor() {}

  /*
  onInit() calls preCheckValues(): This is important because it has to 
  be done before anything else is done in the code but after the variables are assigned.
  It also calls emitValues(): after the variables are assigned and checked, send the data over
  so the components using this range can perform actions with the initial and end values.
  */
  ngOnInit() {
    this.preCheckValues ();
    this.emitValues ();
  }

  preCheckValues () {
    if (typeof (this.minimum) === "string"){
      this.minimum = +this.minimum;
    }

    if (typeof (this.maximum) === "string"){
      this.maximum = +this.maximum;
    }

    if (typeof (this.init) === "string"){
      this.init = +this.init;
    }

    if (typeof (this.end) === "string"){
      this.end = +this.end;
    }

    if (typeof (this.step) === "string"){
      this.step = +this.step;
    }

    if (this.showValues === undefined) {
      this.showValues = false;
    }

    if (this.step === 0 || this.step < 0){
      this.step = 1;
    }

    if (this.minimum > this.maximum){
      let i = this.minimum;
      this.minimum = this.maximum;
      this.maximum = i;
    }

    if (this.step > this.maximum){
      this.step = this.maximum;
    }

    if (this.init < this.minimum){
      this.init = this.minimum;
    }

    if (this.end > this.maximum){
      this.init = this.maximum;
    }

    if (this.disabled === undefined) {
      this.disabled = false;
    }
  }

  /*
  Recieves the value everytime the initial value is changed on the range.
  Calls the evaluatePositions () to make sure the initial value is not overlaping the end value;
  */
  recieveInitValue (event: Event){
    this.init = parseFloat((<HTMLInputElement>event.target).value);
    this.evaluatePositions ();
  }

  /*
  Recieves the value everytime the end value is changed on the range.
  Calls the evaluatePositions () to make sure the end value is not overlaping the init value;
  */
  recieveEndValue (event: Event){
    this.end = parseFloat((<HTMLInputElement>event.target).value);
    this.evaluatePositions ();
  }

  /*
  This method assures that initial value never overlaps the end value.
  After checking and making sure that one value is not overlapping the other, emit the Object
  with both values to be used elsewhere on the code.
  */
  evaluatePositions () {
    if (this.init > this.end){
      this.temp = this.end;
      this.end = this.init;
      this.init = this.temp;
    }
    this.emitValues ();
  }

  /*
  This method emits an Object with init and end values.
  */
  emitValues () {
    this.sendValues.emit({"initial": this.init, "final": this.end});
  }
}
