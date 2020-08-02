import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output() buttonPressed = new EventEmitter<string>();

  handleButton(): void {
    this.buttonPressed.emit("wow");
  }

  
  constructor() { }

  ngOnInit() {}

}
