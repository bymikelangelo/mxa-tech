import { Injectable } from '@nestjs/common';
import { Vehicle } from 'src/vehicles/models/vehicle.model';
import { VehiclesRepository } from 'src/vehicles/repositories/vehicles.repository';
import { VehicleDTO } from '../dtos/vehicle.dto';

@Injectable()
export class VehiclesService {
    constructor(private readonly vehiclesRepository: VehiclesRepository) {}

    async getAll(): Promise<VehicleDTO[]> {
        const values = await
        this.vehiclesRepository.getAll()
        .then((value) => {
            let values = [];
            values = value.map((vehicle) => new VehicleDTO(vehicle));
            return values;
        });

        return values;
    }

    async getByColor(color: string): Promise<VehicleDTO[]> {
        color.toUpperCase();
        const values = await
        this.vehiclesRepository.getByColor(color)
        .then((value) => {
            let values = [];
            values = value.map((vehicle) => new VehicleDTO(vehicle));
            return values;
        });
        /*values.forEach(value => {
            console.log(value);
        });*/
        return values;
    }

}
