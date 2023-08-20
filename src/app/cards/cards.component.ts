import { Component,Input } from '@angular/core';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  constructor() { }
  //recive the data from API by Input
  @Input() repositories!:any[]
}
