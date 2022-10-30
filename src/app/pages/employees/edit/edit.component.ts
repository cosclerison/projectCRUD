import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  
  /**
   * Criando uma propriedade com valor vazio para ser inserido
   *  o valor que vem do getCurrentNavigation
   */
  value: any;

  constructor(
    private touter: Router
  ) { 
    /**
     * Criado uma constante para receber o valor vindo da navegação da rota que foi
     * utilizada em outra tela.
     * direcionado o valor para a propriedade com valor vazio,
     * assim atribuído o valor e ela.
     * deixamos os itens como opcionais caso tenha valor nos mesmos
     */
    const navigation = this.touter.getCurrentNavigation();
    this.value = navigation?.extras.state;
  }

  ngOnInit(): void {
  }

}
