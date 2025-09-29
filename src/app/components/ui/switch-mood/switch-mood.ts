import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-mood',
  imports: [],
  templateUrl: './switch-mood.html',
  styleUrl: './switch-mood.css'
})
export class SwitchMood {
  isDarkMode: boolean = true;

  toggleMood() {
    this.isDarkMode = !this.isDarkMode;
  }
}
