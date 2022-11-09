import { Controller, Get, Param } from '@nestjs/common';
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

    @Get('/byColor/:color')
    async getVehiclesByColor(@Param('color') color: string): Promise<VehicleDTO[]> {
        color = color.toUpperCase();
        console.log(color);
        const values = await
        this.vehiclesService.getByColor(color).then((values => {
            return values;
        })).catch ((error => {
            return [];
        }));

        console.log(values);
        return values;
    }
}
