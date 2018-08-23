import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-slider-complex',
  templateUrl: './angular-slider-complex.component.html',
  styleUrls: ['./angular-slider-complex.component.css']
})
export class AngularSliderComplexComponent implements OnInit {

  /*
  initValue and endValue: hold the data from the object received whenever 
  the values on the range slider change. These fields must be the same as the init 
  and end value from the slider component at all times.

  hotels: an array of objects to simulate a response from a fetch to an API.
  filteredResults: an array that will hold the objects after the method filters it.
  */
  initValue: number;
  endValue: number;
  hotels = [
    {name: "Prince's Nugget Hotel & Spa", "price": "R$100", "stars": 1, "rooms": 3},
    {name: "Noble Ribbon Hotel", "price": "R$200", "stars": 2, "rooms": 2},
    {name: "Cerulean Nugget Resort & Spa", "price": "R$300", "stars": 3, "rooms": 15},
    {name: "Pleasant Sanctum Hotel", "price": "R$400", "stars": 4, "rooms": 1},
    {name: "Sapphire Jungle Resort", "price": "R$500", "stars": 5, "rooms": 8},
  ];
  filteredResults = [];

  constructor() { }
  ngOnInit() { }

  /*
  This method will be called each time a value changes on the range slider,
  it receives an Object with two values, a initial value that represents the initial value 
  and a final value that represents the end value on the range.

  It calls the filterResults method to create a new list of hotels based on the new parameters.
  */
  recieveData (event) {
    this.initValue = +event.initial;
    this.endValue = +event.final;
    this.filterResults ();
  }

  /*
  This method cleans the current filteredResults and iterate over the list of hotels.
  If the hotel rating is between the range given by the user, adds to the filtered results
  to be shown in the HTML.
  */
  filterResults () {
    this.filteredResults = [];
    for (let index in this.hotels){
      if (this.hotels[index].stars >= this.initValue && this.hotels[index].stars <= this.endValue) {
        this.filteredResults.push (this.hotels [index]);
      }
    }
  }
}
