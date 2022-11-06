import { Vehicle } from "../models/vehicle.model";

export class VehicleDTO {
    color: string;
    gear: string;
    manufacturer: string;
    year: string;

    constructor(model: Vehicle) {
        this.color = model.getColor();
        this.gear = model.getGear();
        this.manufacturer = model.getManufacturer();
        this.year = model.getYear();
    }
}