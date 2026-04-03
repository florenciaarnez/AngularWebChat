import { Injectable } from '@angular/core';
import { signal, effect, computed } from '@angular/core';
import { Chat } from '../interfaces/chat';

// guarda la lista de chats en un signal
// lee y escribe en el localStorage
// tiene la lógica del bot

@Injectable({
  providedIn: 'root',
})
export class ChatService {
 // "solo acepto la estructura de mi interfaz Chat"
  private _chats = signal<Chat[]>([
    {
      id: 1,
      name: 'mi usuario',
      telephone: 123456789,
      avatar: 'mi fotito',
      status: 'online',
      messages: [],
    },
  ]);

  public chats = this._chats.asReadonly();

  constructor() {
    effect(() => {
      localStorage.setItem('mis_chats', JSON.stringify(this._chats()));
      console.log('Guardado en LocalStorage{}', this._chats());
    });
     
  };
}