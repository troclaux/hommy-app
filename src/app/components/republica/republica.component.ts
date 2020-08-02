import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-republica',
  templateUrl: './republica.component.html',
  styleUrls: ['./republica.component.scss'],
})
export class RepublicaComponent implements OnInit {

  @Input() title: string;
  @Input() rent: number;
  @Input() description: string;

  constructor() { }

  ngOnInit() {}

}
