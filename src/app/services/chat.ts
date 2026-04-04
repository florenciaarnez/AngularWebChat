import { Injectable } from '@angular/core';
import { signal, effect, computed } from '@angular/core';
import { Chat } from '../interfaces/chat';
import { Message } from '../interfaces/message';

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
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4MvEPvydKhoNlsTqqqf9edvQ4ExSg9U1iAw&s',
      status: 'online',
      messages: [],
    },
    {
      id: 2,
      name: 'otro usuario',
      telephone: 987654321,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4MvEPvydKhoNlsTqqqf9edvQ4ExSg9U1iAw&s',
      status: 'offline',
      messages: [],
    },
  
  ]);

  public chats = this._chats.asReadonly();

  constructor() {

    const chatsguardados = localStorage.getItem('mis_chats');
  
     if (chatsguardados) {
    // Si había algo, actualizamos el Signal ANTES de que el effect empiece a vigilar
    this._chats.set(JSON.parse(chatsguardados));
  }

    effect(() => {
      localStorage.setItem('mis_chats', JSON.stringify(this._chats()));
      console.log('Guardado en LocalStorage{}', this._chats());
    });
     
  };

  agregarChat(nombreNuevo: string, telefonoNuevo: number, estadoNuevo: 'online' | 'offline' | string, avatarNuevo: string ) {
    const listaActual = this._chats();
    const ultimoId = listaActual.length > 0 
    ? Math.max(...listaActual.map(c => c.id)) 
    : 0;

    const nuevoChat: Chat = {
    id: ultimoId + 1,
    name: nombreNuevo,
    telephone: telefonoNuevo,
    avatar: avatarNuevo,
    status: estadoNuevo,
    messages: []
  };

  this._chats.update(listaActual => [...listaActual, nuevoChat]);}

  
  respuestaAutomatica(chatId: number) {
  setTimeout(() => {
    const respuesta :Message={
      text: 'Esta es una respuesta automática del bot.',
      sender:'app',
      timestamp: Date.now(),
    };

    this._chats.update(chats =>
      chats.map(c => c.id === chatId ? { ...c, messages: [...c.messages, respuesta] }: c)
    );
  }, 2000);

}}