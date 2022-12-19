import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ClientsComponent } from './components/admin/clients/clients.component';
import { FormComponent } from './components/admin/form/form.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { SalesComponent } from './components/admin/sales/sales.component';
import { ShopperComponent } from './components/admin/shopper/shopper.component';
import { AuthGuard } from './components/guards/auth.guards';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', canActivate: [AuthGuard], component: AdminComponent },
  { path: 'shopper', canActivate: [AuthGuard], component: ShopperComponent },
  { path: 'sales', canActivate: [AuthGuard], component: SalesComponent },
  { path: 'products', canActivate: [AuthGuard], component: ProductsComponent },
  { path: 'clients', canActivate: [AuthGuard], component: ClientsComponent },
  { path: 'form', canActivate: [AuthGuard], component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
