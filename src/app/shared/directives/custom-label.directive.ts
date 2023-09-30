import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  @Input()
  set color( value: string ) {
    this._color = value;
    this.setStyle();
  }

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';

  constructor( private el: ElementRef<HTMLElement> ) {
    console.log(el);
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setStyle();
  }

  public setStyle(): void {
    if (!this.htmlElement)
      return;

    this.htmlElement!.nativeElement.style.color = this._color;
  }

}
