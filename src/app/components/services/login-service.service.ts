import { Injectable } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(
    private localDataService: LocalDataService,
  ) {
  }


  isAuth() {
    return this.localDataService.getItem('isAuthenticated');
  }

}
