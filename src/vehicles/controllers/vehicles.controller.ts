import { Controller, Get, Param } from '@nestjs/common';
import { VehicleDTO } from 'src/vehicles/dtos/vehicle.dto';
import { VehiclesService } from 'src/vehicles/services/vehicles.service';

@Controller('/vehicles')
export class VehiclesController {
    constructor(private readonly vehiclesService: VehiclesService) {}

    @Get(['', '/all']) 
    async getAll(): Promise<VehicleDTO[]> {
        const vehicles = await
        this.vehiclesService.getAll().then((values => {
            return values;
        })).catch ((error => {
            console.log(error);
            return [];
        }));

        return vehicles;
    }

    @Get('/byColor/:color')
    async getByColor(@Param('color') color: string): Promise<VehicleDTO[]> {
        color = color.toUpperCase();
        const vehicles = await
        this.vehiclesService.getByColor(color).then((values => {
            return values;
        })).catch ((error => {
            console.log(error);
            return [];
        }));

        return vehicles;
    }
}
