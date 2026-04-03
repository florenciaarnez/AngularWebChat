import { Component } from '@angular/core';
import { ChatItems } from "../../components/chatItems/chat-items";
import { ChatWindow } from "../../components/chatWindow/chat-window";
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-home',
  imports: [ Header, ChatItems, ChatWindow ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
