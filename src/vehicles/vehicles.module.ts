import { Module } from '@nestjs/common';
import { VehiclesService } from './services/vehicles.service';
import { VehiclesController } from './controllers/vehicles/vehicles.controller';
import { VehiclesRepository } from './repositories/vehicles.repository';

@Module({
  imports: [],
  providers: [VehiclesService, VehiclesRepository],
  controllers: [VehiclesController]
})
export class VehiclesModule {}
