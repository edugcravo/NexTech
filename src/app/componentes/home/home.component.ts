import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


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


  nome: string = '';
  numero: string = '';
  email: string = '';
  message: string = '';
  isSuccess: boolean = false;

  constructor(private http: HttpClient) {}

  enviar() {
    const formData = new FormData();
    formData.append('nome', this.nome);
    formData.append('numero', this.numero);
    formData.append('email', this.email);

    this.http.post('https://formspree.io/f/xzzpbjow', formData, {
      headers: {
        'Accept': 'application/json'
      }
    }).subscribe(
      response => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Email enviado com sucesso!",
          showConfirmButton: false,
          timer: 1500
        });
        this.isSuccess = true;
        // Limpar os campos após o envio
        this.nome = '';
        this.numero = '';
        this.email = '';
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo deu errado, tente novamente mais tarde!',
        });
        this.isSuccess = false;
      }
    );
  }
  ngOnInit() {
   
  }

  respostas: { [key: string]: boolean } = {
    resposta1: false
  };

  toggleResposta(resposta: string) {
    this.respostas[resposta] = !this.respostas[resposta];
  }
}
