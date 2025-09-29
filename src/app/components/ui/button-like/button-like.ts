import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-button-like',
  imports: [ ],
  templateUrl: './button-like.html',
  styleUrl: './button-like.css',
})
export class ButtonLike {
  isLiked: boolean = false; // inicializa como no likeado

  toggleLike() {
    this.isLiked = !this.isLiked; // cambia el estado cada vez que se clickea
  }
}
