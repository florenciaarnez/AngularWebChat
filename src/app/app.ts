import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { ChatItems } from "./components/chat-items/chat-items";
import { ChatWindow } from "./components/chat-window/chat-window";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ChatItems, ChatWindow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularWebChat');
}
