import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dorm-card',
  templateUrl: './dorm-card.component.html',
  styleUrls: ['./dorm-card.component.scss'],
})
export class DormCardComponent implements OnInit {

  /* title: string = "cartao";
  subtitle: string = "funciona";
 */
  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit() {}

}
