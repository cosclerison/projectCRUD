import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  /**
   * Criado propriedade para ser usado o seu estado de objeto,
   * assim atribuindo valor a ele quando receber dados da ação do (click)
   * Objeto com estado de vazio para não ocorrer erro ou concatenar os valores
   */
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  fakeData = [
    {
      name: 'clerison',
      lastName: 'Oliveira',
      email: 'cosclerison@gmail.com',
      startDate: '01/04/1984'
    },
    {
      name: 'Juliana',
      lastName: 'Vieira',
      email: 'Juliana@gmail.com',
      startDate: '18/06/1988'
    },
    {
      name: 'Bianca',
      lastName: 'Dias',
      email: 'biancadias@gmail.com',
      startDate: '11/03/2013'
    },
    {
      name: 'Maggie',
      lastName: 'Regina',
      email: 'mregina@gmail.com',
      startDate: '10/01/2015'
    },
    {
      name: 'Tiger',
      lastName: 'Turtle',
      email: 'ninjaturtle@gmail.com',
      startDate: '13/03/2014'
    },
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * adicionado o valor de item no estado do objeto navigationExtras,
   * atribuído o valor como segundo parâmetro na rota de navegação (assim a rota de navegação envia o valor
   * que será recebido pela tela corrente, fazendo com que o valor recebido seja utilizado)
   */
  onGoToEdit(item: any): void{
  this.navigationExtras.state = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  /**
   * adicionado o valor de item no estado do objeto navigationExtras,
   * atribuído o valor como segundo parâmetro na rota de navegação (assim a rota de navegação envia o valor
   * que será recebido pela tela corrente, fazendo com que o valor recebido seja utilizado)
   */
    onGoToDetails(item: any): void{
    this.navigationExtras.state = item;
    this.router.navigate(['details'], this.navigationExtras);
  }
  
  onGoToDelete(item: any): void{
    alert('Deleted');
  }

}
