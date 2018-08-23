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

  /*
  initValuePosts and endValuePosts: hold the data from the object received whenever 
  the values on the range slider change. These fields must be the same as the init 
  and end value from the slider component at all times.

  posts: an array of objects, response from an async fetch to jsonplaceholder.
  filteredPosts: an array that will hold the objects after the method filters it.
  */
  initialValuePosts: number;
  endValuePosts: number;
  posts = [];
  filteredPosts = [];

  constructor() { }
  ngOnInit() { this.fetchPosts (); }

  /*
  An async method fetching a JSON from a real API and filling the posts array.
  The method then calls the filterPosts posts to show the values to the user, using the default values
  on the range.
  */
  async fetchPosts () {
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json ();

    data.forEach(element => {
      this.posts.push (element);
    });

    this.filterPosts ();
  }

  /*
  This method will be called each time a value changes on the range slider,
  it receives an Object with two values, a initial value that represents the initial value 
  and a final value that represents the end value on the range.

  It calls the filterResults method to create a new list of hotels based on the new parameters.
  */
  receiveDataHotel (event) {
    this.initValue = +event.initial;
    this.endValue = +event.final;
    this.filterResults ();
  }

  /*
  This method will be called each time a value changes on the range slider,
  it receives an Object with two values, a initial value that represents the initial value 
  and a final value that represents the end value on the range.

  It calls the filterPosts method to create a new list of posts based on the new parameters.
  */
  receiveDataPosts (event) {
    this.initialValuePosts = +event.initial;
    this.endValuePosts = +event.final;
    this.filterPosts ();
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

  /*
  This method cleans the current filteredPosts and iterate over the list of posts.
  If the post id is between the range given by the user, adds to the filtered posts array
  to be shown in the HTML.
  */
  filterPosts () {
    this.filteredPosts = [];
    for (let index in this.posts){
      if (this.posts[index].id >= this.initialValuePosts && this.posts[index].id <= this.endValuePosts) {
        this.filteredPosts.push (this.posts [index]);
      }
    }
  }
}