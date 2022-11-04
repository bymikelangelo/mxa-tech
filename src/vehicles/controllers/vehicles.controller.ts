import { Controller, Get } from '@nestjs/common';
import { VehicleDTO } from 'src/vehicles/dtos/vehicle.dto';
import { VehiclesService } from 'src/vehicles/services/vehicles.service';

@Controller('/vehicles')
export class VehiclesController {
    constructor(private readonly vehiclesService: VehiclesService) {}

    @Get(['', '/all']) 
    getAll(): VehicleDTO[] {
        return this.vehiclesService.getAll();
    }

    @Get('/byColor')
    getVehiclesByColor(color: String): VehicleDTO[] {
        return this.vehiclesService.getVehiclesByColor("YELLOW");
    }
}
