import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
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
        MaterialModule
    ],
    exports: [
        HeaderComponent,
        BreadcrumbComponent
    ]
})
export class SharedModule {}
