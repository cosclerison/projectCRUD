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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onGoToEdit(item: any): void{
    /**
     * adicionado o valor de item no estado do objeto navigationExtras,
     * atribuído o valor como segundo parâmetro na rota de navegação (assim a rota de navegação envia o valor
     * que será recebido pela tela corrente, fazendo com que o valor recebido seja utilizado)
     */
    this.navigationExtras.state = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  onGoToDetails(item: any): void{
    /**
     * adicionado o valor de item no estado do objeto navigationExtras,
     * atribuído o valor como segundo parâmetro na rota de navegação (assim a rota de navegação envia o valor
     * que será recebido pela tela corrente, fazendo com que o valor recebido seja utilizado)
     */
    this.navigationExtras.state = item;
    this.router.navigate(['details'], this.navigationExtras);
  }
  onGoToDelete(item: any): void{
    alert('Deleted');
  }

}
