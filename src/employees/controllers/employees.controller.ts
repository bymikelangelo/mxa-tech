import { Controller, Get } from '@nestjs/common';
import { EmployeeDTO } from '../dtos/employee.dto';
import { EmployeesService } from '../services/employees.service';

@Controller('/employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get('/young')
  getHello(): EmployeeDTO[] {
    return this.employeesService.getYoungEmployees();
  }
}
