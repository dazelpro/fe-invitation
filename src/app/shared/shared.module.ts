import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ConfirmationDeleteComponent } from './dialogs/confirmation-delete/confirmation-delete.component';
import { TokenExpiredComponent } from './dialogs/token-expired/token-expired.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        TokenExpiredComponent,
        HeaderComponent,
        BreadcrumbComponent,
        ConfirmationDeleteComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatMenuModule,
        MatRippleModule,
        MatProgressBarModule
    ],
    exports: [
        HeaderComponent,
        BreadcrumbComponent
    ]
})
export class SharedModule {}
