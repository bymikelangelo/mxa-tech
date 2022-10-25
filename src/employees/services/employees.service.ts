import { Injectable } from '@nestjs/common';
import { EmployeesRepository } from 'src/employees/repositories/employees.repository';
import { EmployeeDTO } from '../dtos/employee.dto';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeesRepository: EmployeesRepository) {}

  getYoungEmployees(): EmployeeDTO[] {
    return this.employeesRepository
      .getEmployees()
      .filter((employee) => employee.birthDate.getFullYear() > 1999)
      .map((employee) => EmployeeDTO.fromModel(employee));
  }
}
