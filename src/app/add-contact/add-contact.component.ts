import { Component, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Contact } from '../contacts/shared/contact.model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  @Output() addContactEvent = new EventEmitter<Contact>();
  constructor(private fb: FormBuilder) { }

  addNewContact(newContact: Contact) {
    this.addContactEvent.emit(newContact);
  }

  addForm = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: [''],
    number: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
  });

  get name() {
    return this.addForm.get('name');
  }

  get surname() {
    return this.addForm.get('surname');
  }

  get email() {
    return this.addForm.get('email');
  }

  get number() {
    return this.addForm.get('number');
  }

}
