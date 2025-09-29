import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  standalone: true, // standalone: no necesita declararse en un módulo
  templateUrl: './saludo.html',
  styleUrls: ['./saludo.css'],
})
export class Saludo {
  // Variable string con el primer mensaje (siempre visible)
  mensaje1: string = '¡Hola Mundo!';

  // Variable string con el segundo mensaje (se muestra solo si "mostrar" es true)
  mensaje2: string = 'Bienvenida a Angular 🚀';

  // Variable booleana inicializada en false
  mostrar: boolean = false;

  // Método que cambia el valor de "mostrar" al hacer clic en el botón
  toggleMensaje(): void {
    this.mostrar = !this.mostrar;
  }
}
