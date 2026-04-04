import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../../services/chat';


@Component({
  selector: 'app-message-form',
   standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './message-form.html',
  styleUrl: './message-form.css',
})

export class MessageForm implements OnInit {

  public messageform!: FormGroup;

  constructor(private fb: FormBuilder,private chatService: ChatService,) {}

  ngOnInit() {
    this.messageform = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(1)]],
    });
  }
  saveMessage() {
    if (this.messageform.invalid) return;

    const { text} = this.messageform.value;
    const chat = this.chatService.selectedChat(); 
    if (!chat) return;
    this.chatService.addMessage(
      chat.id,
      text,
      'user',
    );
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    this.messageform.reset();
    }
}
