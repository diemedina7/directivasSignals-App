import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  private fb = inject( FormBuilder ); // forma alternativa de crear injeccion de dependencias (sin uso del constructor)
  public color: string = 'green';

  public myForm: FormGroup = this.fb.nonNullable.group({
    name: [ '', [Validators.required, Validators.minLength(6), Validators.email] ]
  });

  public changeColor(): void {
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }
}
