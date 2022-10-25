import { Employee } from '../models/employee.model';

export class EmployeeDTO {
  id: number;
  fullName: string;

  static fromModel(employee: Employee): EmployeeDTO {
    return {
      id: employee.id,
      fullName: employee.firstName + ' ' + employee.lastName,
    };
  }
}
