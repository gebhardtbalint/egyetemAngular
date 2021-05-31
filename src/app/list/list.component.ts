import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  constructor(
    public service: ApiService,
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getHouses();
  }

  getHouses(): void {
    if (this.service.adatom.length === 0) {
      this.httpClient.get<any>('').subscribe(
        response => {
          this.service.adatom = response;
          localStorage.setItem('data', JSON.stringify(this.service.adatom));

        }
      );
    }
  }

  delete(adat: any): void {
    const delindex = this.service.adatom.indexOf(adat, 0);
    if (delindex > -1) {
      this.service.adatom.splice(delindex, 1);
    }
  }

 /* update(adat: any): number {
    const updindex = this.service.adatom.indexOf(adat, 0);
    if (updindex > -1) {
      console.log(updindex);
      return updindex;
    }
  }*/

  logout(): void {
    localStorage.removeItem('token');
  }


}
