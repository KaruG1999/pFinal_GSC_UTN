import { Component, Input } from '@angular/core';
import { Category } from '../../../../interfaces/category.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-container',
  imports: [CommonModule],
  templateUrl: './category-container.html',
  styleUrl: './category-container.css',
})
export class CategoryContainer {
  @Input() categories: Category[] = [];
}
