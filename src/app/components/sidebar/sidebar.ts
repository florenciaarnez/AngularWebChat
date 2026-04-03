import { Component, inject } from '@angular/core';
import { ChatService } from '../../services/chat';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  chatService = inject(ChatService);
}
