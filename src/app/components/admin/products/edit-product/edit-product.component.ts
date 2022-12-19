import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from 'src/app/components/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  form: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditProductComponent>,
    private fb: FormBuilder,
    private productsService: ProductsService,
  ) {
   }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required]
    });
  }

  save() {
    let body = JSON.stringify({
      title: this.form.get('title').value
    })
    this.productsService.update(this.data.product.id, body).then(x => {
      this.dialogRef.close();
    }).catch()
  }

  close() {
    this.dialogRef.close();
  }

}
