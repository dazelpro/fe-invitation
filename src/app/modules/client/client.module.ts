import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client.routing';
import { OrderListComponent } from './page/order-list/order-list.component';

@NgModule({
    declarations: [OrderListComponent],
    imports: [
        CommonModule,
        ClientRoutingModule
    ]
})
export class ClientModule {}
