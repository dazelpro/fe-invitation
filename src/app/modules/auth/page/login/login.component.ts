import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpResponseCode } from '../../../../core/constants/error-code.const';
import { Role } from '../../../../core/constants/role.const';
import { LoginRequest } from '../../../../core/models/login.model';
import { LoginService } from '../../../../core/services/login.service';
import { StorageService } from '../../../../core/services/storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public form = {
        username: '',
        password: ''
    };

    public formValid = {
        username: true,
        password: true
    };

    ready = false;
    hide = true;

    constructor(
        private loginService: LoginService,
        private storageService: StorageService,
        private router: Router,
        private _snackBar: MatSnackBar
    ) {}

    validator() {
        this.formValid.username = this.form.username ? true : false;
        this.formValid.password = this.form.password ? true : false;

        if (this.formValid.username && this.formValid.password) {
            this.ready = true;
        } else {
            this.ready = false;
        }
    }

    submit() {
        this.validator();
        if (this.ready) {
            this.login();
        }
    }

    login() {
        const body = this.getRequestBody();
        this.loginService.login(body).subscribe({
            next: (r) => {
                this.storageService.setToken(r.data.token);
                this.redirectTo();
            },
            error: (e) => {
                if (e.error.code === HttpResponseCode.EMAIL_NOT_FOUND) {
                    this._snackBar.open('Akun tidak ditemukan');
                } else if (e.error.code === HttpResponseCode.INCORRECT_PASSWORD) {
                    this._snackBar.open('Mohon periksa kembali password anda');
                } else {
                    this._snackBar.open('Terdapat kendala pada sistem');
                }
            }
        });
    }

    getRequestBody(): LoginRequest {
        return this.form;
    }

    redirectTo() {
        const role = this.storageService.getRoleUser();
        switch (role) {
            case Role.ADMIN.toString():
                this.router.navigate(['/']);
                break;
            case Role.MEMBER.toString():
                this.router.navigate(['/client']);
                break;
            default:
                this.router.navigate(['/client']);
                break;
        }
    }
}
