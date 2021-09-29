import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numero1: number=0;
  numero2: number=0;
  resultado: number=0;

  constructor() { }

  ngOnInit(): void {
  }

add(): void {
   this.resultado = this.numero1 / this.numero2;
   }

}
