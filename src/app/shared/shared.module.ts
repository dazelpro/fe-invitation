import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { TokenExpiredComponent } from './dialogs/token-expired/token-expired.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';

@NgModule({
    declarations: [
        InputComponent,
        TokenExpiredComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatMenuModule,
        MatRippleModule
    ],
    exports: [
        InputComponent,
        HeaderComponent
    ]
})
export class SharedModule {}
