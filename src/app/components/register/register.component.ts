import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  register() {
    let body = JSON.stringify({
      firstName: this.form.get('firstName').value,
      lastName: this.form.get('lastName').value,
      username: this.form.get('firstName').value,
      password: this.form.get('lastName').value,
    })
    this.usersService.addUser(body).then(x => {
      if(x['id']) {
        this.router.navigate(['login']);
      }
    }).catch(error => {
    })

  }
  

}