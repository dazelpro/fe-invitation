import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardClientComponent } from './page/dashboard/dashboard.component';
import { OrderListComponent } from './page/order-list/order-list.component';
import { ProfileComponent } from './page/profile/profile.component';

const routes: Routes = [
    {
        path: '',
        component: OrderListComponent
    },
    {
        path: 'dashboard',
        component: DashboardClientComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule {}
