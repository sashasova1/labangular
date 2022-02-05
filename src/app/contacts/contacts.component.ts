import { Component, OnInit } from '@angular/core';

import { Contact } from './shared/contact.model';
import { ContactService } from './shared/contact.service';
export type EditorType = 'add';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  allContacts!: Contact[];
  filteredContacts!: Contact[];

  columnIds = ['id', 'name', 'surname', 'email', 'number'];

  sortedColumn!: string;
  ascendingSort!: boolean;
  editor: EditorType = null;

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contactService.getContacts().subscribe(contacts => this.filteredContacts = this.allContacts = contacts);
  }

  addContact(newContact: Contact) {
    newContact.id = this.filteredContacts.reduce((prev, current) => (prev.id > current.id) ? prev : current).id + 1;
    this.allContacts.push(newContact);
  }

  deleteContact(contact: Contact) {
    const index = this.filteredContacts.indexOf(contact);
    this.filteredContacts.splice(index, 1);
  }

  get showAddForm() {
    return this.editor === 'add';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

  /**
   * Filter the contact array according to the event source value.
   *
   * @param filter the filter
   */
  onFilter(filter: string): void {
    this.filteredContacts = this.allContacts.filter(contact => {
      return contact.name.includes(filter) || contact.surname.includes(filter) || contact.email.includes(filter) || contact.number.includes(filter);
    });
  }

  /**
   * Sort the contact array according to the event source element id.
   *
   * @param columnId the column id to sort
   */
  onSort(columnId: string): void {
    this.ascendingSort = this.sortedColumn === columnId ? !this.ascendingSort : true;
    this.sortedColumn = columnId;

    this.filteredContacts = this.allContacts.sort((contact1, contact2) => {
      let result = contact1[columnId].localeCompare(contact2[columnId]);

      if (!this.ascendingSort) {
        result = -result;
      }

      return result;
    });
  }

}