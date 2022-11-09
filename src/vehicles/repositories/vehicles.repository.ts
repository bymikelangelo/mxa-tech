import { Injectable } from "@nestjs/common";
import { getDatabase, get, ref, child, query, equalTo, orderByChild } from "firebase/database"
import { Vehicle } from "../models/vehicle.model";

@Injectable()
export class VehiclesRepository {
    async getAll(): Promise<Vehicle[]> {
        const reference = child(ref(getDatabase()), "vehicles");
        const response = await
        /*
            get() funciona de forma asincrona, por lo que es necesario devolver el array despues de recoger
            los valores de Firebase
        */
        get(reference).then((snapshot) => {
            var data = [];
            snapshot.forEach(element => {
                data.push(this.createVehicle(element.val()));
            });
            return data;
        }).catch ((error) => {
            console.error(error);
            return [];
        });

        return response;
    }

    async getByColor(color: string): Promise<Vehicle[]> {
        const reference = child(ref(getDatabase()), "vehicles");
        const colorQuery = query(reference, orderByChild('color'), equalTo(color));
        const response = await
        get(colorQuery).then((snapshot) => {
            var data = [];
            snapshot.forEach(element => {
                data.push(this.createVehicle(element.val()));
            });
            return data;
        }).catch ((error) => {
            console.error(error);
            return [];
        });

        return response;
    }

    private createVehicle(element: any): Vehicle {
        return new Vehicle(element.color, element.gear, element.manufacturer, element.year);
    }
}
