import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'https://dummyjson.com/';
  constructor(
  ) { }

  auth(body) {
    return fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body
    })
      .then(res => res.json())
      .then();
  }

  addUser(body) {
    return fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body
    })
      .then(res => res.json())
      .then();
  }

}
