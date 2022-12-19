import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  lengthNumbers: number = 0;
  regex = /(\d+)/g;
  isValidText: boolean = false;
  
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      text: ['', Validators.required],
      textArea: ['']
    });
    this.form.controls.textArea.disable();
  }

  textChange() {
    if (this.form.get('text').value)
      this.isValidText = this.form.get('text').value.match(this.regex).sort((a, b) => b - a).toString().replace(/,/g, "").length >= 5 ? true : false;
  }

  test() {
    this.form.controls['textArea'].setValue(this.form.get('text').value.replace(/\d+/g, '') + this.form.get('text').value.match(this.regex).sort((a, b) => b - a).toString().replace(/,/g, ""));
  }


}
