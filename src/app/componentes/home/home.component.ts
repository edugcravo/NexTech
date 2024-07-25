import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


declare var ScrollReveal: any; // Declaração para evitar erros de tipo

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
    
    // Configuração do ScrollReveal

    ScrollReveal().reveal('.titulo-principal', {
      duration: 2000,
      origin: 'left',
      distance: '100px'
    });


    ScrollReveal().reveal('.cards-equipe', {
      duration: 2000,
      origin: 'left',
      distance: '100px'
    });

    ScrollReveal().reveal('.projetos', {
      duration: 2000,
      origin: 'left',
      distance: '100px'
    });

    ScrollReveal().reveal('.etapas-container', {
      duration: 2000,
      origin: 'left',
      distance: '100px'
    });

    ScrollReveal().reveal('.moderno', {
      duration: 2000,
      origin: 'left',
      distance: '100px'
    });

    ScrollReveal().reveal('.clientes', {
      duration: 2000,
      origin: 'left',
      distance: '100px'
    });

    ScrollReveal().reveal('.duvida', {
      duration: 2000,
      origin: 'left',
      distance: '100px'
    });

    ScrollReveal().reveal('.contato', {
      duration: 2000,
      origin: 'left',
      distance: '100px'
    });

    
  }

  respostas: { [key: string]: boolean } = {
    resposta1: false
  };

  toggleResposta(resposta: string) {
    this.respostas[resposta] = !this.respostas[resposta];
  }

  redirecionarWhatsapp() {
    // preparar mensagem
    const mensagem = `Olá, estou interessado em saber mais sobre os serviços da empresa.`;
    // redirecionar para o whatsapp
    window.open(`https://wa.me/5541992213199?text=${mensagem}`, '_blank');
  }
}
