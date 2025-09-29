import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

// plantear aca o en  interface general?
interface Movie {
  id: number;
  title: string;
  image: string;
  liked: boolean;
}

@Component({
  selector: 'app-continue-watching',
  imports: [CommonModule],
  templateUrl: './continue-watching.html',
  styleUrl: './continue-watching.css',
})
export class ContinueWatching {
  movies = signal<Movie[]>([
    {
      id: 1,
      title: 'Metro Mystery',
      image: 'img/loren-cutler-DLEvzWzKtoM-unsplash.jpg',
      liked: false,
    },
    {
      id: 2,
      title: 'Dark Ocean',
      image: 'img/diane-picchiottino-Fo4_-oKnxjE-unsplash.jpg',
      liked: true,
    },
    {
      id: 3,
      title: 'Blood Moon',
      image: 'img/fabian-oelkers-r4-zbEFgOJA-unsplash.jpg',
      liked: false,
    },
  ]);

  toggleLike(id: number) {
    this.movies.update((movies) =>
      movies.map((movie) => (movie.id === id ? { ...movie, liked: !movie.liked } : movie))
    );
  }
}
