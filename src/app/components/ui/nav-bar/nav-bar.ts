import { Component, Input,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
  changeDetection: ChangeDetectionStrategy.OnPush, // Estrategia de detección de cambios para optimizar el rendimiento
})
export class NavBar {

}
