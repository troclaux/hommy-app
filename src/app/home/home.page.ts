import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  title: string = "qualquer coisa";
  subtitle: string = "qualquer coisa";
  
  dorms = [];
  
  ngOnInit() {

    this.dorms = [
      {
        city: 'Brasília',
        numberOfRooms: 4,
        rent: 850 ,
      },
      {
        city: 'Rio de Janeiro',
        numberOfRooms: 5,
        rent: 900,
      },
      {
        city: 'São Paulo',
        numberOfRooms: 3,
        rent: 800,
      },
      {
        city: 'Belo Horizonte',
        numberOfRooms: 4,
        rent: 750,
      }    
    ]
  }

  constructor() {}  

}