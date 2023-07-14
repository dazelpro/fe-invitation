import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { AdminRoutingModule } from './admin.routing';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { OrdersComponent } from './page/orders/orders.component';
import { TemplatesComponent } from './page/templates/templates.component';
import { UsersComponent } from './page/users/users.component';

@NgModule({
    declarations: [
        DashboardComponent,
        UsersComponent,
        OrdersComponent,
        TemplatesComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MaterialModule,
        SharedModule
    ]
})
export class AdminModule {}
