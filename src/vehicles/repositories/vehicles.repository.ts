import { Injectable } from "@nestjs/common";
import { Database, getDatabase, get, ref, child } from "firebase/database"
import { Vehicle } from "../models/vehicle.model";

@Injectable()
export class VehiclesRepository {
    //constructor (private db: Database = getDatabase()) {};
    getAll(): Vehicle[] {
        get(child(ref(getDatabase()), "vehicles")).then((snapshot) => {
            let vehicles: Array<Vehicle>;
            snapshot.forEach(element => {
                //vehicles.push(element.val());
                console.log(element.val());
            })
            return vehicles;
        });
        return null;
    }

    getByColor(color: String): Vehicle[] {
        get(child(ref(getDatabase()), "vehicles")).then((snapshot) => {
            let vehicles: Array<Vehicle>;
            snapshot.forEach(element => {
                if (element.val().color == color)
                    vehicles.push(element.val());
            })
            return vehicles;
        });
        return null;
    }
}
