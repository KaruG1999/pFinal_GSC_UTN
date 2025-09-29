import { Injectable } from '@angular/core';
import { Movie } from '../../interfaces/movies.interface';

@Injectable({
  providedIn: 'root', // Servicio disponible en toda la aplicación
})
export class MovieTrendService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'El Laberinto del Fauno',
      year: 2006,
      description:
        'En la posguerra española, una niña descubre un mundo mágico lleno de criaturas oscuras y pruebas sobrenaturales.',
      image: '/img/laberintoFauno.jpg',
      genre: 'Fantasía Oscura',
    },
    {
      id: 2,
      title: 'Stardust',
      year: 2007,
      description:
        'Un joven viaja a un reino mágico en busca de una estrella caída, encontrándose con brujas y hechiceros.',
      image: '/img/stardust.jpg',
      genre: 'Fantasía',
    },
    {
      id: 3,
      title: 'Coraline',
      year: 2009,
      description:
        'Una puerta secreta lleva a una niña a un mundo alterno tan encantador como siniestro.',
      image: '/img/coraline-y-la-puerta-secreta-pelicula-3603.jpg',
      genre: 'Fantasía/Misterio',
    },
    {
      id: 4,
      title: 'La Forma del Agua',
      year: 2017,
      description:
        'Una mujer establece un vínculo con una criatura anfibia cautiva en un laboratorio secreto.',
      image: '/img/ShapeOfWaterCoupleofMisfits.jpg',
      genre: 'Fantasía Oscura',
    },
    {
      id: 5,
      title: 'Cazadores de Sombras: Ciudad de Hueso',
      year: 2013,
      description:
        'Una joven descubre que pertenece a un linaje de cazadores de demonios y se adentra en un mundo oculto.',
      image: '/img/Cazadores-de-sombras-Ciudad-de-hueso.jpg',
      genre: 'Fantasía Urbana',
    },
    {
      id: 6,
      title: 'Sombras Tenebrosas',
      year: 2012,
      description:
        'Un vampiro despierta tras siglos y regresa a su mansión familiar llena de secretos.',
      image: '/img/sombras-tenebrosas.jpg',
      genre: 'Fantasía Gótica',
    },
    {
      id: 7,
      title: 'La Novia Cadáver',
      year: 2005,
      description:
        'Un joven entra accidentalmente en el mundo de los muertos y despierta el amor de una novia espectral.',
      image: '/img/corpse-bride-1600-x-900.jpg',
      genre: 'Animación/Fantasía Oscura',
    },
    {
      id: 8,
      title: 'El Castillo Vagabundo',
      year: 2004,
      description:
        'Una joven maldecida con la apariencia de anciana busca ayuda en un castillo mágico ambulante.',
      image: '/img/castilloAmbulante.jpg',
      genre: 'Fantasía',
    },
    {
      id: 9,
      title: 'Underworld',
      year: 2003,
      description:
        'Un joven príncipe lucha contra las sombras que amenazan con destruir el equilibrio del mundo.',
      image: '/img/underworld.jpg',
      genre: 'Fantasía Épica',
    },
    {
      id: 10,
      title: 'The Vampire Diaries',
      year: 2009,
      description:
        'Una pareja maldita está condenada a vivir separados: él como lobo de noche, ella como halcón de día.',
      image: '/img/vampire-diaries-nina-dobrev-nina-dobrev-wallpaper-preview.jpg',
      genre: 'Fantasía Romántica',
    },
  ];

  getMovies(): Movie[] {
    return this.movies;
  }
}
