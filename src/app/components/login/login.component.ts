import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formlogin = new FormGroup({});

  constructor(private router: Router) { }

  ngOnInit() {
    this.formlogin = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

    console.log(this.formlogin);
  }

  onSubmit(formulario) {
    if (formulario.valid) {
      this.router.navigate(['home']);
    }
  }

}
