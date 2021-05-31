import {Injectable, OnInit} from '@angular/core';
import {MyAdat} from './data';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  public adatom: MyAdat[] = [];

  constructor(
    private http: HttpClient
  ) { }

}
