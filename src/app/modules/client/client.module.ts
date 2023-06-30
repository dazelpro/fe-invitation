import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { SharedModule } from '../../shared/shared.module';
import { ClientRoutingModule } from './client.routing';
import { DialogChangeUrlComponent } from './components/dialog-change-url/dialog-change-url.component';
import { OrderListComponent } from './page/order-list/order-list.component';
@NgModule({
    declarations: [
        OrderListComponent,
        DialogChangeUrlComponent
    ],
    imports: [
        CommonModule,
        ClientRoutingModule,
        MatRippleModule,
        SharedModule,
        FormsModule
    ]
})
export class ClientModule {}
