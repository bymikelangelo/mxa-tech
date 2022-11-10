import { Injectable } from '@nestjs/common';
import { VehiclesRepository } from 'src/vehicles/repositories/vehicles.repository';
import { VehicleDTO } from '../dtos/vehicle.dto';

@Injectable()
export class VehiclesService {
    constructor(private readonly vehiclesRepository: VehiclesRepository) {}

    async getAll(): Promise<VehicleDTO[]> {
        const values = await
        this.vehiclesRepository.getAll()
        .then((values) => {
            let vehicles = [];
            vehicles = values.map((vehicle) => new VehicleDTO(vehicle));
            return vehicles;
        }).catch ((error) => {
            console.log(error);
            return [];
        });

        return values;
    }

    async getByColor(color: string): Promise<VehicleDTO[]> {
        const values = await
        this.vehiclesRepository.getByColor(color)
        .then((values) => {
            let vehicles = [];
            vehicles = values.map((vehicle) => VehicleDTO.customView(vehicle));
            return vehicles;
        }).catch ((error) => {
            console.log(error);
            return [];
        });

        return values;
    }

}
