import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // para ngIf, ngFor, etc.
import { Movie } from '../../../../interfaces/movies.interface';
import { Card1 } from '../card-1/card-1';
// importo servicio de peliculas
import { MovieTrendService } from '../../../service/movie-trend-service';

@Component({
  selector: 'app-list-card1',
  imports: [Card1, CommonModule],
  templateUrl: './list-card1.html',
  styleUrls: ['./list-card1.css'],
})
export class ListCard1 {
  @ViewChild('movieGrid', { static: false }) movieGrid!: ElementRef; // Referencia al contenedor de películas

  // Usando signals (Angular 17+)
  selectedMovie = signal<string>('');

  // Lista de películas Moonlit (fantasía oscura)
  movies = signal<Movie[]>([]);

  // Inyectar el servicio
  constructor(private movieTrendService: MovieTrendService) {}

  // Inicializar la lista de películas al cargar el componente
  ngOnInit(): void {
    this.movies.set(this.movieTrendService.getMovies());
  }

  // Método para manejar la selección de película desde el componente hijo
  onMovieSelected(movieTitle: string): void {
    this.selectedMovie.set(movieTitle);
    console.log('Película seleccionada:', movieTitle);
  }

  // Método trackBy para optimizar el *ngFor
  trackByMovieId(index: number, movie: Movie): number {
    return movie.id;
  }

  // botones del carrusel
  scrollLeft() {
    this.movieGrid.nativeElement.scrollBy({ left: -220, behavior: 'smooth' });
  }

  scrollRight() {
    this.movieGrid.nativeElement.scrollBy({ left: 220, behavior: 'smooth' });
  }
}
