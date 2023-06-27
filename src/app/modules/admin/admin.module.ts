import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { AdminRoutingModule } from './admin.routing';
import { DashboardComponent } from './page/dashboard/dashboard.component';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatRippleModule
    ]
})
export class AdminModule {}
