import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
   employee: any;

  /**
   * propriedade vinculado com a tag FORM usando [formGroup], fica associado ao formulário
   */
  employeeForm!: FormGroup;

  /**
   * propriedade privada para validação do campo de email
   * com esses caracteres malucos kkkkk /\s+@\s+\.\s+/
   */
  private isEmail = /\s+@\s+\.\s+/;
  
  constructor(
    private router: Router,
    private formEdit: FormBuilder
  ) { 
    /**
     * Criado uma constante para receber o valor vindo da navegação da rota que foi
     * utilizada em outra tela.
     * direcionado o valor para a propriedade com valor vazio,
     * assim atribuído o valor e ela.
     * deixamos os itens como opcionais caso tenha valor nos mesmos
     */
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras.state;
    this.initForm();
  }

  ngOnInit(): void {
    if(typeof this.employee !== 'undefined') {
      this.employeeForm.patchValue(this.employee);
    } else {
      this.router.navigate(['new']);
    }
  }

  onSave() {
    console.log('saved', this.employeeForm.value);
    this.router.navigate(['list']);
  }

  /**
   * Método para pegar os dados do formulário, com validações e requerimentos dos campos
   * deste modo todos os inputs estão declarados como obrigatórios (required)
   * seno utilizado um array nas propriedades do formulário acentuando valor iniciar 
   * vazio e atribuído a validação
   */
  private initForm(): void{
    this.employeeForm = this.formEdit.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      // Email com validação usando pattern, sendo validado de acordo com a propriedade atribuída
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      startDate: ['', [Validators.required]],
    })
  }

  cancelEdition() {
    this.router.navigate(['list']);
  }

}
