import { Component } from '@angular/core';
import { NavBar } from '../../ui/nav-bar/nav-bar';
import { PrimaryButton } from '../../ui/primary-button/primary-button';
import { ButtonLike } from '../../ui/button-like/button-like';
import { SwitchMood } from '../../ui/switch-mood/switch-mood';

@Component({
  selector: 'app-header',
  imports: [NavBar, PrimaryButton, ButtonLike, SwitchMood],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title: string = 'Moon';
  description: string = '2009 | Sci-Fi | 1 Season';
}
