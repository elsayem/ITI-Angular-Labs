import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _HttpClient:HttpClient) { }

  public GetAllEmployeeFromDatabase():Observable<any>{
    return this._HttpClient.get("http://localhost:3000/employees");
  }

  public postEmployeeToDatabase(employee:Employee):Observable<any>{
    return this._HttpClient.post("http://localhost:3000/employees" , employee);
  }

  public putEmployeeToDatabase(employeeId:string , employee:Employee):Observable<any>{
    return this._HttpClient.put(`http://localhost:3000/employees/${employeeId}` , employee);
  }

  public deleteEmployeeToDatabase(employeeId:string):Observable<any>{
    return this._HttpClient.delete(`http://localhost:3000/employees/${employeeId}`);
  }

  public getEmployeeById(id:string):Observable<any> {
    return new Observable((subsriber) => {
      this.GetAllEmployeeFromDatabase().subscribe((response:Employee[]) => {

        const employee = response.find((emp) => {return emp.id == id});

        subsriber.next(employee);
  
      })
    })

  }
}
