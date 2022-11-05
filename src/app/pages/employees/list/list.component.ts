import { async } from '@angular/core/testing';
import { EmployessService } from './../employess.service';
import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  employees$ = this.employessService.getAll();
  allUsers: any;
  
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
    private router: Router,
    private employessService: EmployessService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers() {
    this.allUsers = await this.employessService.getAll();
    console.log(this.allUsers);
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
  
  async onDeleteEmployees(empId: string): Promise<any>{
    try {
      alert('Deleted');
      location.reload();
      await this.employessService.onDeleteEmployees(empId);
    } catch (error: any) {
      console.log(error);
    }
  }

}
