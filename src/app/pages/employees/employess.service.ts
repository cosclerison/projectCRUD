import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployessService {
  [x: string]: any;
  employees!: Observable<any[]>;

  private employeesCollection: any = AngularFirestoreCollection;
  employee: any;

  constructor(
      private readonly afs: AngularFirestore,
  ) { 
    this.employeesCollection = afs.collection<any>('employees');
    this.getAll();
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
        // console.log('onSaveEmployee', result);
      } catch (err: any) {
        reject(err.message);
      }
    });
  }

  getAll() {
    return new Promise<any>((resolve)=> {
      this.afs.collection('employees').valueChanges({ idField: 'id' }).subscribe(users => resolve(users));
    })
  }

}
