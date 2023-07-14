import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { OrdersComponent } from './page/orders/orders.component';
import { TemplatesComponent } from './page/templates/templates.component';
import { UsersComponent } from './page/users/users.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'templates',
        component: TemplatesComponent
    },
    {
        path: 'orders',
        component: OrdersComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
