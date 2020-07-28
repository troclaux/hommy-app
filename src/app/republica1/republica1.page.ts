import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-republica1',
  templateUrl: './republica1.page.html',
  styleUrls: ['./republica1.page.scss'],
})
export class Republica1Page implements OnInit {

  republicas = [];

  constructor() { }

  ngOnInit() {
    this.republicas = [
      {
        anuncio: 'República cidade universitária',
        cidade: 'Brasília',
        endereco: 'sqn 310 bloco J apt 210',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis mollis dui. Cras vel vulputate.',
        vagasDisponiveis: 3,
        aluguel: 850,
        avaliacao: 4.0,
      },
      {
        anuncio: 'República ilha do fundão',
        cidade: 'Rio de Janeiro',
        endereco: 'rua angelo 39, flamengo',
        descricao: 'Aenean molestie lectus sed fringilla egestas. Curabitur et velit quis tellus imperdiet imperdiet a eu nisl. Maecenas nulla tortor, faucibus.',
        vagasDisponiveis: 2,
        aluguel: 900,
        avaliacao: 4.2,
      },
      {
        anuncio: 'República usp',
        cidade: 'São Paulo',
        endereco: 'porto Tomasa 21052',
        descricao: 'Aliquam luctus sagittis eleifend. Aliquam vel justo finibus, pellentesque ligula quis, imperdiet nibh. Cras et nunc ut nibh convallis efficitur. ',
        vagasDisponiveis: 4,
        aluguel: 800,
        avaliacao: 4.8,
      },
      {
        anuncio: 'República UFMG',
        cidade: 'Belo Horizonte',
        endereco: 'rua Benevides 520, apt 802',
        descricao: 'Suspendisse odio nisl, commodo et hendrerit quis, euismod vel ipsum. Nunc ac pretium ex. Morbi rutrum hendrerit turpis, nec semper. ',
        vagasDisponiveis: 1,
        aluguel: 750,
        avaliacao: 3.5,
      }
    ]
  }

}
