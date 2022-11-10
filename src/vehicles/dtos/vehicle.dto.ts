import { Vehicle } from "../models/vehicle.model";

export class VehicleDTO {
    plate: string;
    color: string;
    gear: string;
    manufacturer: string;
    year: string;

    constructor(model: Vehicle) {
        this.plate = model.getPlate();
        this.color = model.getColor();
        this.gear = model.getGear();
        this.manufacturer = model.getManufacturer();
        this.year = model.getYear();
    }

    static customView(model: Vehicle) {
        return {
            "plate" : model.getPlate(),
            "manufacturer" : model.getManufacturer()
        };
    }
}