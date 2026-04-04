import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../../services/chat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})

export class Form implements OnInit {

  public form!: FormGroup;

  constructor(private fb: FormBuilder,private chatService: ChatService,
    private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      estado: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
    });
  }
  guardarContacto() {
    if (this.form.invalid) return;

    const { nombre, telefono, estado, avatar } = this.form.value;

    this.chatService.addChat(
      nombre,
      Number(telefono),
      estado,
      avatar
    );

    this.form.reset();
    this.router.navigate(['/chats']);
  }
}