import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { SharedModule } from 'src/app/shared/shared.module';
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
        MatRippleModule
    ]
})
export class AuthModule {}
