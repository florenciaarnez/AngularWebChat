import { Component, inject } from '@angular/core';
import { ChatService } from '../../services/chat';
import { ReactiveFormsModule } from '@angular/forms';
import{MessageForm} from '../message-form/message-form';
import { NgClass } from '@angular/common';
import { Header } from "../header/header";
@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [ReactiveFormsModule, MessageForm, NgClass, Header],
  templateUrl: './chat-window.html',
  styleUrl: './chat-window.css',
})
export class ChatWindow {
 public chatService = inject(ChatService);

  nuevoMensaje: string = '';
}
