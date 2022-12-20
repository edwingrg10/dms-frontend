import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/login-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private loginService: LoginServiceService
  ) { }

  ngOnInit() {
  }

  finishSession() {
    this.loginService.logout();
  }

}
