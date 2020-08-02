import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  republicas = [];

  constructor() { }

  ngOnInit() {
    
    this.republicas = [
      {
        title: 'República Ilha do Fundão',
        rent: 850,
        description: 'Alugo vaga em quarto compartilhado para alunos da UFRJ- Ilha do Fundão. Ótima localização, espaço familiar, cozinha completa com fogão, geladeira e microondas. Interessados adicionar contato no whatsapp para mais informações(61 98393-3550).'
      },
      {
        title: 'República Ilha do Governador',
        rent: 800,
        description: 'Alugo um quarto individual em ambiente tranquilo, com entrada independente. Cozinha, sala e 2 banheiros de uso compartilhado.Excelente localização em rua fechada, monitorada por câmeras, próximo ao Shopping Ilha Plaza, padaria, restaurante, mercado, etc.'
      },
      {
        title: 'República Ilha do Governador',
        rent: 900,
        description: 'República na ilha do governador com 4 quartos compartilhados(2 suítes) mobiliado, com ar condicionado e wi-fi. Cozinha completamente equipada (microondas, geladeira, mesa e fogão).'
      }
    ];
  }

}
