import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})

export class CadastroPage implements OnInit {

  registerForm: FormGroup;

  constructor(public formbuilder: FormBuilder) {
    this.registerForm = this.formbuilder.group({
      name: [null, [Validators.required]],
      login: [null, [Validators.required]],
      password: [null, [Validators.minLength(8), Validators.required]],
      confirmPassword: [null, [Validators.minLength(8), Validators.required]],
      email:[null, [Validators.required]],
      phone:[null],
      typeOfCustomer:[null, [Validators.required]]
    });
   }

  ngOnInit() {
  }

  submitForm(form) {
    console.log(form);
    console.log(form.value);
  }

}
