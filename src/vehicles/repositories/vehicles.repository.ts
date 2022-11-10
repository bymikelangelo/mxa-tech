import { Injectable } from "@nestjs/common";
import { getDatabase, get, ref, child, query, equalTo, orderByChild } from "firebase/database"
import { Vehicle } from "../models/vehicle.model";

/*
    get() funciona de forma asincrona, por lo que es necesario devolver el array despues de recoger
    los valores de Firebase
*/
@Injectable()
export class VehiclesRepository {
    async getAll(): Promise<Vehicle[]> {
        const reference = child(ref(getDatabase()), "vehicles");
        const entries = await
        get(reference).then((snapshot) => {
            let vehicles = [];
            snapshot.forEach(element => {
                vehicles.push(this.createVehicle(element));
            });
            return vehicles;
        }).catch ((error) => {
            console.error(error);
            return [];
        });

        return entries;
    }

    async getByColor(color: string): Promise<Vehicle[]> {
        const reference = child(ref(getDatabase()), "vehicles");
        const colorQuery = query(reference, orderByChild('color'), equalTo(color));
        const entries = await
        get(colorQuery).then((snapshot) => {
            let vehicles = [];
            snapshot.forEach(element => {
                vehicles.push(this.createVehicle(element));
            });
            return vehicles;
        }).catch ((error) => {
            console.error(error);
            return [];
        });

        return entries;
    }

    private createVehicle(element: any): Vehicle {
        let elementValue = element.val();
        return new Vehicle(element.key, elementValue.color, elementValue.gear, elementValue.manufacturer, elementValue.year);
    }
}
