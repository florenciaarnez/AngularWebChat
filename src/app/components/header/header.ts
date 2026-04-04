import { Component, inject } from '@angular/core';
import { ChatService } from '../../services/chat';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  public chatService = inject(ChatService);
}
