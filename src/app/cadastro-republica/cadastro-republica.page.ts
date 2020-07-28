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

      endereco: [null],
      aluguel: [null],
      avaliacao: [null],
      anuncio: [null],
      vagasDisponiveis: [null],
      
    });
    
  }

  ngOnInit() {
  }

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

}