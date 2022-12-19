import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* Components */
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { ShopperComponent } from './components/admin/shopper/shopper.component';
import { SalesComponent } from './components/admin/sales/sales.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { ClientsComponent } from './components/admin/clients/clients.component';
import { ToolbarComponent } from './components/admin/toolbar/toolbar.component';
import { FormComponent } from './components/admin/form/form.component';
import { EditProductComponent } from './components/admin/products/edit-product/edit-product.component';

import { UsersService } from './components/services/users.service';
import { ProductsService } from './components/services/products.service';

import { LocalDataService } from './components/services/local-data.service';
import { NotificationsService } from './components/services/notificaciones.service';
import { LoginServiceService } from './components/services/login-service.service';
import { AuthGuard } from './components/guards/auth.guards'

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    RegisterComponent,
    LogInComponent,
    AdminComponent,
    ShopperComponent,
    SalesComponent,
    ProductsComponent,
    ClientsComponent,
    ToolbarComponent,
    FormComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [UsersService, ProductsService, LocalDataService, NotificationsService, LoginServiceService, AuthGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }