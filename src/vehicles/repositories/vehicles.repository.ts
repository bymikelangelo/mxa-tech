import { Injectable } from "@nestjs/common";
import { getDatabase, get, ref, child } from "firebase/database"
import { Vehicle } from "../models/vehicle.model";

@Injectable()
export class VehiclesRepository {
    // constructor (private db: Database = getDatabase()) {};
    async getAll(): Promise<Vehicle[]> {
        const response = await
        /*
            get() funciona de forma asincrona, por lo que es necesario devolver el array despues de recoger
            los valores de Firebase
        */
        get(child(ref(getDatabase()), "vehicles")).then((snapshot) => {
            var data = [];
            snapshot.forEach(element => {
                data.push(this.createVehicle(element.val()));
            });
            return data;
        }).catch ((error) => {
            console.error(error);
            return null;
        });

        return await response;
    }

    getByColor(color: String): Vehicle[] {
        get(child(ref(getDatabase()), "vehicles")).then((snapshot) => {
            let vehicles: Vehicle[] = [];
            snapshot.forEach(element => {
                if (element.val().color == color) {
                    var vehicle: Vehicle = this.createVehicle(element.val());
                    vehicles.push(vehicle);
                }
            })
            return vehicles;
        });
        return null;
    }

    private createVehicle(element: any): Vehicle {
        return new Vehicle(element.color, element.gear, element.manufacturer, element.year);
    }
}
