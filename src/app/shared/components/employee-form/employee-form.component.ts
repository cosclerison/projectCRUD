import { Employee } from './../../models/employee.interface';
import { map } from 'rxjs/operators';
import { EmployessService } from './../../../pages/employees/employess.service';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
 
  /**
   * Criando uma propriedade com valor vazio para ser inserido
   *  o valor que vem do getCurrentNavigation
   */
  //  employee: any;
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
    private formEdit: FormBuilder,
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
    this.employee = navigation?.extras.state;
    this.initForm();
  }

  ngOnInit(): void {
    /**
     * verificando se a propriedade employee esta vazia
     * caso esteja vazia sera direcionado para tela (new)
     * caso tenha dados será carregado usando os dados vindo do formulário
     */
    if(typeof this.employee !== 'undefined') {
      this.employeeForm.patchValue(this.employee);
    } else {
      this.router.navigate(['new']);
    }
  }

  onSave(): void {
    if(this.employeeForm.value !== undefined) {
      const employee = this.employeeForm.value;
      const employeeId = this.employee.id || null;
      this.employessService.onSaveEmployee(employee, employeeId);
      console.log('id', employeeId);
      this.employeeForm.reset();
    }
    console.log(this.employeeForm.valid);
    // this.router.navigate(['list']);
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
