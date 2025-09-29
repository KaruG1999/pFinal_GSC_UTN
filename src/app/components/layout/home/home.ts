import { Component } from '@angular/core';
import { TrendingContainer } from '../../page/trending-container/trending-container';
import { ContinueWatching } from '../../page/continue-watching/continue-watching';
import { FeaturedMovie } from '../../page/featured-movie/featured-movie';
import { MoonlitBox } from '../../page/moonlit-box/moonlit-box';
import { CategoryContainer } from '../../page/category-container/category-container';

@Component({
  selector: 'app-home',
  imports: [TrendingContainer, ContinueWatching, FeaturedMovie, MoonlitBox, CategoryContainer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
