import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Importar el componente y luego agregarlo a los imports
import { Saludo } from './components/ui/saludo/saludo';
import { Child } from './components/ui/child/child';
import { Header } from './components/layout/header/header';
import { Footer } from './components/layout/footer/footer';
import { TrendingContainer } from "./components/page/trending-container/trending-container";
import { Card1 } from './components/ui/card-1/card-1';
import { CommonModule } from '@angular/common'; // para ngIf, ngFor, etc.
import { ContinueWatching } from './components/page/continue-watching/continue-watching';
import { CategoryContainer } from './components/page/category-container/category-container';
import { MoonlitBox } from './components/page/moonlit-box/moonlit-box';
import { FeaturedMovie } from './components/page/featured-movie/featured-movie';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule /* , Saludo, Child */, Header, Footer, TrendingContainer, ContinueWatching, Card1, CategoryContainer, MoonlitBox, FeaturedMovie], // Agregar Saludo a los imports
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pFinal_utn_gsc');

  // Función para manejar el evento emitido por el componente hijo
  onChildClick(event: string) {
    console.log('Evento recibido desde el componente hijo:', event);
  }
}
