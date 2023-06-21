import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpResponseCode } from '../../../../core/constants/error-code.const';
import { LoginRequest } from '../../../../core/models/login.model';
import { LoginService } from '../../../../core/services/login.service';
import { StorageService } from '../../../../core/services/storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public form = {
        username: '',
        password: ''
    };

    public formValid = {
        username: true,
        password: true
    };

    ready = false;

    constructor(private loginService: LoginService, private storageService: StorageService, private router: Router) {}

    ngOnInit(): void {}

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
                this.router.navigate(['/']);
            },
            error: (e) => {
                if (e.error.code === HttpResponseCode.EMAIL_NOT_FOUND) {
                    console.log('akun tidak di temukan');
                    // this.toastrService.error('Email yang anda masukkan tidak terdaftar', 'Mohon periksa kembali email anda, lalu coba lagi.');
                } else if (e.error.code === HttpResponseCode.INCORRECT_PASSWORD) {
                    console.log('pass salah');
                    // this.toastrService.error('Kata sandi yang anda masukkan tidak sesuai', 'Mohon periksa kembali kata sandi anda, lalu coba lagi.');
                } else {
                    console.log('something is wrong');
                }
            }
        });
    }

    getRequestBody(): LoginRequest {
        return this.form;
    }
}
