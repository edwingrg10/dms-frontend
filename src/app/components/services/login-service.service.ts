import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataService } from '../services/local-data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(
    private localDataService: LocalDataService,
    private router: Router,
  ) {
  }

  isAuth() {
    return this.localDataService.getItem('isAuthenticated');
  }

  logout() {
    this.router.navigate(['/login']);
    this.localDataService.removeItem('isAuthenticated');
  }

}
