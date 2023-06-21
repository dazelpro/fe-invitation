import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { TokenExpiredComponent } from './dialogs/token-expired/token-expired.component';

@NgModule({
    declarations: [InputComponent, TokenExpiredComponent],
    imports: [CommonModule, FormsModule],
    exports: [InputComponent]
})
export class SharedModule {}
