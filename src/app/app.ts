import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatService } from './services/chat';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularWebChat');
  private chatService = inject(ChatService);
}
