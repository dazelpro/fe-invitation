import { Component, OnInit } from '@angular/core';

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

    constructor() {}

    ngOnInit(): void {
        console.log('tes');
    }

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
            // this.login();
        }
    }
}
