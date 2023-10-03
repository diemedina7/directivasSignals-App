import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {

  public counter = signal(10);                                               //signal writeable
  public squareCounter = computed( () => this.counter() * this.counter() );  //signal onlyread

  public increaseBy( value: number ) {
    this.counter.update( current => current + value );
  }
}
