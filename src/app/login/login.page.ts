import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  registerForm: FormGroup;

  constructor(public formbuilder: FormBuilder) {
    this.registerForm = this.formbuilder.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.minLength(8), Validators.required]],
    });
  }

  ngOnInit() {}

  submitForm(form) {
    console.log(form);
    console.log(form.value);
  }
}
