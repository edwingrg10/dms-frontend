import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalDataService } from '../services/local-data.service';
import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  form: FormGroup;
  isError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService,
    private localDataService: LocalDataService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  auth() {
    let body = JSON.stringify({
      username: this.form.get('username').value,
      password: this.form.get('password').value
    })
    this.usersService.auth(body).then(x => {
      if (x.id) {
        this.authSuccessfully();
      } else if (x.message) {
        this.isError = true;
      }
    }).catch(error => {
    })
  }

  authSuccessfully() {
    this.isError = false;
    this.localDataService.setItem('isAuthenticated', true);
    this.router.navigate(['admin']);
  }
}
