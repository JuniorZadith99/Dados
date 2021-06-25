import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoIzquierda = '../assets/img/dado1.png';
  dadoDerecha = '../assets/img/dado4.png';

  numero1: number | undefined;
  numero2: number | undefined;

  tirarDados(): void{
    this.numero1 = Math.round (Math.random() * 5) + 1 ;
    this.numero2 = Math.round (Math.random() * 5) + 1 ;
    this.dadoIzquierda = '../assets/img/dado' + this.numero1 + '.png;'
    this.dadoDerecha = '../assets/img/dado' + this.numero2 + '.png;'
       } 

       /* tirarDados(): void{
        this.numero1 = Math.round (Math.random()) * 6;
        this.numero2 = Math.random() * 6;
        console.log(this.numero1);
        console.log(this.numero2);
      } */
}
