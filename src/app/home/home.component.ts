import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for basic Angular directives


@Component({
  selector: 'app-home',
  imports: [CommonModule], // Import CommonModule for basic Angular directives
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title ='Welcome to the Angular E-commerce App'; // Title of the component
  description = 'Find the best products here!'; // Description of the component

}
