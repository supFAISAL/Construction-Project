import { WorkOrdersComponent } from './Steps/WorkOrders/WorkOrders.component';
import { PermitsComponent } from './Steps/Permits/Permits.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
{path:"permits",component:PermitsComponent},
{path:"",component:WorkOrdersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 