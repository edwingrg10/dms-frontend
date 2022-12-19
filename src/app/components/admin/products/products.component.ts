import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from '../../services/products.service';
import { EditProductComponent } from './edit-product/edit-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any =  [];
  displayedColumns: string[] = ['title', 'category', 'description', 'brand', 'img', 'actions'];
  dataSource: any;
  @ViewChild(MatPaginator, { static: false })
  paginator: MatPaginator;

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getAll().then(x=> {
      this.products = x.products;
      this.dataSource = new MatTableDataSource<any>(this.products);
      this.dataSource.paginator = this.paginator;
    }).catch()
  }

  getProductById(id) {
    this.productsService.getById(id).then(x=> {
      if(x.id) {
        
        const dialogRef = this.dialog.open(EditProductComponent, {
          disableClose: true,
          width: '25vw',
          height: 'auto',
          data: { product: x}
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
          }
        })
      }
      
    }).catch()
  }

  deleteProduct(id) {
    this.productsService.delete(id).then(x=> {
    }).catch()
  }

}
