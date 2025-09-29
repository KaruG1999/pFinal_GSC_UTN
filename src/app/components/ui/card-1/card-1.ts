import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // para ngIf, ngFor, etc.
import { Movie } from '../../../../interfaces/movies.interface';

@Component({
  selector: 'app-card-1',
  imports: [CommonModule],
  templateUrl: './card-1.html',
  styleUrl: './card-1.css',
})
export class Card1{
  // Recibir datos del componente padre
  @Input() movie!: Movie;

  // Emitir evento al componente padre
  @Output() movieSelected = new EventEmitter<string>();

  // Método que se ejecuta al hacer clic en "Seleccionar"
  selectMovie(): void {
    this.movieSelected.emit(this.movie.title);
    
  }
}