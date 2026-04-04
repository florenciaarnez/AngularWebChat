import { Component } from '@angular/core';
import { Form } from '../../components/form/form';
@Component({
  selector: 'app-new-contact',
  standalone: true,
  imports: [Form],
  templateUrl: './NewContact.html',
  styleUrl: './NewContact.css',
})
export class NewContact {}
