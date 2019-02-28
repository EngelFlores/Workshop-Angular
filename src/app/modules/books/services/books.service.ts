import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getGoogleBooks(q: string) {
    return this.httpClient.get(`https://www.googleapis.com/books/v1/volumes?q=${q}`)
  }

}
