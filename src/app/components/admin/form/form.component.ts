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

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      text: ['', Validators.required, Validators.minLength(15)],
      textArea: ['']
    });
    this.form.controls.textArea.disable();
  }

  test() {
    let text = this.form.get('text').value.split("").reverse().join("");
    var regex = /(\d+)/g;
    this.form.controls['textArea'].setValue(text.replace(/\d+/g, '')+text.match(regex).sort((a,b)=>b-a).toString().replace(/,/g, ""));
  }


}
