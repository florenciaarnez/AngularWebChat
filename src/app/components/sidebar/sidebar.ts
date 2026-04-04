import { Component, inject } from '@angular/core';
import { ChatService } from '../../services/chat';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  chatService = inject(ChatService);
}
