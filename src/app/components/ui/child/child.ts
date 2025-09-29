import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  // Hacer input desde componente hijo
  @Input() message: string = 'Mensaje desde el componente hijo';

  // Hacer output desde componente hijo
  @Output() childClick = new EventEmitter<string>();
  // Output function llamada desde html
  onClick() {
    this.childClick.emit('Mensaje enviado desde el componente hijo');
  }
}
