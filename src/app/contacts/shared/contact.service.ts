import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsUrl = '/assets/contacts.json';

  constructor(private http: HttpClient) {
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl)
      .pipe(
        map(data => data['contacts'])
      );
  }

}