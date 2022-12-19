import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from '../../services/products.service';
import { EditProductComponent } from './edit-product/edit-product.component';
import swal from 'sweetalert2';
import { NotificationsService } from '../../services/notificaciones.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];
  displayedColumns: string[] = ['title', 'category', 'description', 'brand', 'img', 'actions'];
  dataSource: any;
  @ViewChild(MatPaginator, { static: false })
  paginator: MatPaginator;

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getAll().then(x => {
      this.products = x.products;
      this.dataSource = new MatTableDataSource<any>(this.products);
      this.dataSource.paginator = this.paginator;
    }).catch()
  }

  getProductById(id, index) {
    this.productsService.getById(id).then(x => {
      if (x.id) {
        const dialogRef = this.dialog.open(EditProductComponent, {
          disableClose: true,
          width: '25vw',
          height: 'auto',
          data: { product: x }
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.products[index] = result;
            this.dataSource = new MatTableDataSource<any>(this.products);
            this.dataSource.paginator = this.paginator;
            this.notificationsService.showSuccess("Producto modificado exitosamente");
          }
        })
      }
    }).catch()
  }

  deleteProduct(id, index) {
    const msgTitle = "Eliminar";
    const msgText = "¿Seguro que desea elminar el producto?";
    const confirmMessage = "Si, eliminar";
    const cancelMessage = "Cancelar";
    swal.fire({
      title: msgTitle,
      text: `${msgText}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmMessage,
      cancelButtonText: cancelMessage,
    }).then((result) => {
      if (result.value) {
        this.productsService.delete(id).then(x => {
          if (x.id) {
            this.products.splice(index, 1);
            this.dataSource = new MatTableDataSource<any>(this.products);
            this.dataSource.paginator = this.paginator;
            this.notificationsService.showSuccess("Producto eliminado exitosamente");
          }
        }).catch()
      }
    })
  }

}
