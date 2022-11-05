import { EmployessService } from './../employess.service';
import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
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
  
  /**
   * Criando uma propriedade com valor vazio para ser inserido
   *  o valor que vem do getCurrentNavigation
   */
   employees: any = null;

   constructor(
     private router: Router,
     private employessService: EmployessService
   ) { 
     /**
      * Criado uma constante para receber o valor vindo da navegação da rota que foi
      * utilizada em outra tela.
      * direcionado o valor para a propriedade com valor vazio,
      * assim atribuído o valor e ela.
      * deixamos os itens como opcionais caso tenha valor nos mesmos
      */
     const navigation = this.router.getCurrentNavigation();
     this.employees = navigation?.extras.state;
   }
 
   ngOnInit(): void {
    if(typeof this.employees === 'undefined') {
      this.router.navigate(['list'])
    }
   }

   onGoToEdit(): void{
    /**
     * Adicionado valor do objeto navigationExtras em employees,
     * atribuído o valor como segundo parâmetro na rota de navegação (assim a rota de navegação envia o valor
     * que será recebido pela tela corrente, fazendo com que o valor recebido seja utilizado)
     */
    this.navigationExtras.state = this.employees;
    this.router.navigate(['edit'], this.navigationExtras);
  }

   goBackToList() {
     this.router.navigate(['list']);
  }
  
  async onDeleteEmployees(): Promise<any>{
    try {
      alert('Deleted');
      this.router.navigate(['list']);
      await this.employessService.onDeleteEmployees(this.employees.id);
    } catch (error: any) {
      console.log(error);
    }
  }
 
 }