import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { AuthRoutingModule } from './auth.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChangePasswordComponent } from './page/change-password/change-password.component';

@NgModule({
    declarations: [LoginComponent, ChangePasswordComponent],
    imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
