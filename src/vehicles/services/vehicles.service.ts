import { Injectable } from '@nestjs/common';
import { VehicleDTO } from 'src/vehicles/dtos/vehicle.dto';
import { VehiclesRepository } from 'src/vehicles/repositories/vehicles.repository';

@Injectable()
export class VehiclesService {
    constructor(private readonly vehiclesRepository: VehiclesRepository) {}

    getAll(): VehicleDTO[] {
        return this.vehiclesRepository.getAll();
    }

    getVehiclesByColor(color: string): VehicleDTO[] {
        return this.vehiclesRepository.getByColor(color);
    }

}
