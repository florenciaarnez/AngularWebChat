import { Component } from '@angular/core';
import { ChatWindow } from "../../components/chatWindow/chat-window";
import { Sidebar } from "../../components/sidebar/sidebar";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChatWindow, Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {  
  }

