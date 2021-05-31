import {Component, OnInit} from '@angular/core';
import {MyAdat} from '../data';
import {ApiService} from '../api.service';
import {ListComponent} from '../list/list.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  adat = new MyAdat();
  idupdate;

  constructor(
    private service: ApiService,
    private listComponent: ListComponent,
  ) { }

  ngOnInit(): void {
  }

  UpdateIdSet(): void
  {
    this.adat = this.service.adatom[this.idupdate];
    if (this.idupdate > this.service.adatom.length || this.idupdate < 0)
    {
      alert('ID not found');
    }
  }

  save(): void {
    this.service.adatom.push(this.adat);
    this.service.adatom.splice(-1, 1);
    this.adat = new MyAdat();
  }

  logout(): void {
    localStorage.removeItem('token');
  }

}
