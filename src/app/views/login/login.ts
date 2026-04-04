import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

function adminValidator(control: any) {
  return control.value === 'admin' ? null : { notAdmin: true };
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  public form!: FormGroup;
  fb = inject(FormBuilder);
  router = inject(Router);
 
  ngOnInit() {
    this.form = this.fb.group({
      contraseña: ['', [Validators.required, adminValidator]]
    });
  }

  login() {
    if (this.form.invalid) return;
     localStorage.setItem('isLogged', 'true');
      this.router.navigate(['/chats']);
  }

}

