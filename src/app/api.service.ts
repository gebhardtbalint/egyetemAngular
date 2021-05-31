import {Injectable, OnInit} from '@angular/core';
import {MyAdat} from './data';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  public adatom: MyAdat[] = [];
   //apiUrl = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes/5';

  constructor(
    private http: HttpClient
  ) { }

}
