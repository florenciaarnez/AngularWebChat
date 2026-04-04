import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../../services/chat';


@Component({
  selector: 'app-message-form',
   standalone: true,
  imports: [ReactiveFormsModule],
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
  guardarmensaje() {
    if (this.messageform.invalid) return;

    const { text} = this.messageform.value;
    const chat = this.chatService.chatSeleccionado(); 
    if (!chat) return;
    this.chatService.agregarMensaje(
      chat.id,
      text,
      'user',
      Date.now()
    );

    this.messageform.reset();
    }
}
