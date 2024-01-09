import { PermitsRenewComponent } from './Steps/Permits/permitsRenew/permitsRenew.component';
import { AppRoutingModule } from './app-routing.module';
import { PermitsDataComponent } from './Steps/Permits/permitsData/permitsData.component';
import { NewPermitsModalComponent } from './Steps/Permits/newPermitsModal/newPermitsModal.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InfoModalComponent } from './Steps/InfoModal/InfoModal.component';
import { PermitsComponent } from './Steps/Permits/Permits.component';
import { WorkOrderInfoModalComponent } from './Steps/WorkOrders/WorkOrderInfoModal/WorkOrderInfoModal.component';
import { WorkOrdersComponent } from './Steps/WorkOrders/WorkOrders.component';
import { NavbarComponent } from './UI/Navbar/Navbar.component';
import { SidebarComponent } from './UI/Sidebar/Sidebar.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { GoogleMapsModule } from '@angular/google-maps'
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {OrderTypeListComponent} from "./Steps/WorkOrders/order-type-list/order-type-list.component";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    WorkOrdersComponent,
    PermitsComponent,
    InfoModalComponent,
    WorkOrderInfoModalComponent,
    NewPermitsModalComponent,
    PermitsDataComponent,
    PermitsRenewComponent,
    OrderTypeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    NzInputModule,
    GoogleMapsModule,
    NzMenuModule,
    NzIconModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
