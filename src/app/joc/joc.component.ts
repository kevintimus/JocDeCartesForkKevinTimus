import {Component, OnInit} from '@angular/core';
import {Joc} from "../../models/joc";
import {JugadorComponent} from "../jugador/jugador.component";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {PonerHtmlService} from '../poner-html.service'

@Component({
  selector: 'app-joc',
  standalone: true,
  imports: [
    JugadorComponent,
    NgStyle,
    NgIf
  ],
  templateUrl: './joc.component.html',
  styleUrl: './joc.component.css'
})
export class JocComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string | undefined | any = '';
  game: Joc | undefined;
  protected i: any;
  private posicion = 1;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Joc();
    console.log(this.game)
  }

  takeCard() {
    if(!this.pickCardAnimation){
      this.currentCard = this.game?.stack.pop();
      this.pickCardAnimation = true;

      if (this.posicion == 1) {
        var regex = /(\d+)/g;
        const numero =  this.currentCard.match(regex);
        const texto = document.getElementById("Jugador1")!;
        texto.innerHTML = numero;
        console.log(numero)
      }

      if (this.posicion == 2) {
        var regex = /(\d+)/g;
        const numero =  this.currentCard.match(regex);
        const texto = document.getElementById("Jugador2")!;
        texto.innerHTML = numero;
        console.log(numero)

      }
      if (this.posicion == 3) {
        var regex = /(\d+)/g;
        const numero =  this.currentCard.match(regex);
        const texto = document.getElementById("Jugador3")!;
        texto.innerHTML = numero;
        console.log(numero)

      }

      setTimeout(()=> {
        this.game?.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }


  protected posicionMas1() {
    this.posicion++




  }
}
