import { Injectable } from '@nestjs/common';
import { Vehicle } from 'src/vehicles/models/vehicle.model';
import { VehiclesRepository } from 'src/vehicles/repositories/vehicles.repository';
import { VehicleDTO } from '../dtos/vehicle.dto';

@Injectable()
export class VehiclesService {
    constructor(private readonly vehiclesRepository: VehiclesRepository) {}

    getAll(): VehicleDTO[] {
        var vehicles: VehicleDTO[] = [];
        var promise: Promise<Vehicle[]> = this.vehiclesRepository.getAll();
        promise.then(function(value) {
            vehicles = value.map((vehicle) => new VehicleDTO(vehicle));
            console.log("SERVICE: " + vehicles);
        })
        //console.log("SERVICE: " + vehicles);
        return vehicles;
    }

    getVehiclesByColor(color: string): VehicleDTO[] {
        return this.vehiclesRepository.getByColor(color).map((vehicle) => new VehicleDTO(vehicle));
    }

}
