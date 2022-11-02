import { Module } from '@nestjs/common';
import { EmployeesModule } from './employees/employees.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [EmployeesModule, VehiclesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
