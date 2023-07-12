import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../../material.module';
import { AuthRoutingModule } from './auth.routing';
import { ChangePasswordComponent } from './page/change-password/change-password.component';
import { LoginComponent } from './page/login/login.component';

@NgModule({
    declarations: [
        LoginComponent,
        ChangePasswordComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule,
        FormsModule,
        MaterialModule
    ]
})
export class AuthModule {}
