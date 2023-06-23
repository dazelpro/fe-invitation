import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './page/order-list/order-list.component';

const routes: Routes = [
    {
        path: '',
        component: OrderListComponent
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
