import {Component, OnInit} from '@angular/core';
import {MyAdat} from '../data';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})

export class CreateComponent implements OnInit {

  adat = new MyAdat();

  constructor(
    private service: ApiService,
  ) { }

  ngOnInit(): void {
  }

  save(): void {
    this.service.adatom.push(this.adat);
    this.adat = new MyAdat();
  }

}
