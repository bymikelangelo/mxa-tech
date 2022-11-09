import { Controller, Get } from '@nestjs/common';
import { VehicleDTO } from 'src/vehicles/dtos/vehicle.dto';
import { VehiclesService } from 'src/vehicles/services/vehicles.service';

@Controller('/vehicles')
export class VehiclesController {
    constructor(private readonly vehiclesService: VehiclesService) {}

    @Get(['', '/all']) 
    async getAll(): Promise<VehicleDTO[]> {
        const values = await
        this.vehiclesService.getAll().then((values => {
            return values;
        })).catch ((error => {
            return [];
        }));

        console.log(values);
        return values;
    }

    @Get('/byColor')
    async getVehiclesByColor(color: String): Promise<VehicleDTO[]> {
        const values = await
        this.vehiclesService.getByColor("yellow").then((values => {
            return values;
        })).catch ((error => {
            return [];
        }));

        console.log(values);
        return values;
    }
}
