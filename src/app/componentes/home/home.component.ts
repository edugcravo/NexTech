import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  resposta1: any = false;
  resposta2: any = false;
  resposta3: any = false;
  resposta4: any = false;
  resposta5: any = false;

  constructor() { }
  ngOnInit() {
   
  }

  respostas: { [key: string]: boolean } = {
    resposta1: false
  };

  toggleResposta(resposta: string) {
    this.respostas[resposta] = !this.respostas[resposta];
  }
}
