import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Employee } from './../../shared/models/employee.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployessService {
  [x: string]: any;
  employees!: Observable<Employee[]>;

  private employeesCollection: any = AngularFirestoreCollection;
  employee: any;

  constructor(
      private readonly afs: AngularFirestore
  ) { 
    this.employeesCollection = afs.collection<any>('employees');
    this.getEmployees();
  }

  onDeleteEmployee(empId: string): Promise<void> {
    return new Promise(async(resolve, reject) => {
      try {
        const result = await this.employeesCollection.doc(empId).delete();
        console.log('onDeleteEmployee', result)
      } catch (error: any) {
        reject(error.message);
      }
    });
  }

  onSaveEmployee(employeeData: any, empId: string): Promise<void> {
    return new Promise(async(resolve, reject) => {
      try {
        const id = empId || this.afs.createId();
        const data = {id, ...employeeData};
        const result = await this.employeesCollection.doc(id).set(Object.assign({}, data))
        resolve(result);
        console.log('onSaveEmployee', result);
      } catch (err: any) {
        reject(err.message);
      }
    });
  }

  private getEmployees(): void {
    this.employees = this.employeesCollection
      .get()
      .pipe(
        map((actions: any) => actions.map((a: any) => a.payload.doc.data() as Employee))
      );
      console.log('getEmployees', this.employees);
  }
}
