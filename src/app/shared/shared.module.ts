import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
        FormsModule
    ],
    exports: [
        InputComponent,
        HeaderComponent
    ]
})
export class SharedModule {}
