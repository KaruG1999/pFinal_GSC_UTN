import { Component, Input } from '@angular/core';
import { Movie } from '../../../../interfaces/movies.interface';
import { CommonModule } from '@angular/common';
import { PrimaryButton } from "../../ui/primary-button/primary-button";
import { ButtonLike } from "../../ui/button-like/button-like";

@Component({
  selector: 'app-featured-movie',
  imports: [PrimaryButton, ButtonLike, CommonModule],
  templateUrl: './featured-movie.html',
  styleUrls: ['./featured-movie.css']
})
export class FeaturedMovie {
  @Input() movie!: Movie; // <- Recibe objeto interfaz Movie global

}