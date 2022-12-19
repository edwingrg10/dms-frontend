import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }


  getAll() {
    return fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then();
  }

  getById(id) {
    return fetch('https://dummyjson.com/products/' + id)
      .then(res => res.json())
      .then();
  }

  delete(id) {
    return fetch('https://dummyjson.com/products/' + id, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then();
  }

  update(id, body) {
    return fetch('https://dummyjson.com/products/' + id, {
      method: 'PUT', /* or PATCH */
      headers: { 'Content-Type': 'application/json' },
      body: body
    })
      .then(res => res.json())
      .then();
  }

}
