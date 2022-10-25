import { Module } from '@nestjs/common';
import { EmployeesRepository } from 'src/employees/repositories/employees.repository';
import { EmployeesController } from './controllers/employees.controller';
import { EmployeesService } from './services/employees.service';

@Module({
  imports: [],
  controllers: [EmployeesController],
  providers: [EmployeesService, EmployeesRepository],
})
export class EmployeesModule {}
