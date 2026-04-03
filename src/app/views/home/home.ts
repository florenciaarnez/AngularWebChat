import { Component } from '@angular/core';
import { ChatWindow } from "../../components/chatWindow/chat-window";
import { Header } from "../../components/header/header";
import { Sidebar } from "../../components/sidebar/sidebar";
@Component({
  selector: 'app-home',
  imports: [ ChatWindow, Sidebar ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
