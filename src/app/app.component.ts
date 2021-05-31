import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Breaking Bad characters';

  constructor(
    private router: Router,
  ) {

  }

  navigate(): void{
    this.router.navigate(['details', 'valami']);
  }

  logout() {
    localStorage.removeItem('token');
  }
}

