import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-republica',
  templateUrl: './cadastro-republica.page.html',
  styleUrls: ['./cadastro-republica.page.scss'],
})
export class CadastroRepublicaPage implements OnInit {

  registerForm: FormGroup;

  constructor(public formbuilder: FormBuilder) {

    this.registerForm = this.formbuilder.group({

      endereco: [null, [Validators.required, Validators.maxLength(30)]],
      aluguel: [null, [Validators.required]],
      descricao: [null],
      anuncio: [null, [Validators.required]],
      vagasDisponiveis: [null, [Validators.required]],
      
    });
    
  }

  ngOnInit() {
  }

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

}