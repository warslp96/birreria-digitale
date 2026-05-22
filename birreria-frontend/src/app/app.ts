import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaBirreComponent } from './lista-birre/lista-birre';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListaBirreComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('birreria-fronted');
}
