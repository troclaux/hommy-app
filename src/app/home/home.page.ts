import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  dorms = [];

  ngOnInit() {

    this.dorms = [
      {
        numberOfRooms: 7,
        city: 'Brasilia',
        zipCode: '70747123'
      },
      {
        numberOfRooms: 4,
        city: 'Brasilia',
        zipCode: '70747123'
      },
      {
        numberOfRooms: 4,
        city: 'Brasilia',
        zipCode: '70747123'
      }    
    ]
  }

  constructor() {}  

}