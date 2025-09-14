import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Importar el componente y luego agregarlo a los imports
import { Saludo } from './saludo/saludo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Saludo], // Agregar Saludo a los imports
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pFinal_utn_gsc');
}
