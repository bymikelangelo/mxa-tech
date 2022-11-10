export class Vehicle {
    private plate: string;
    private color: string;
    private gear: string;
    private manufacturer: string;
    private year: string;


    public getPlate(): string {
        return this.plate;
    }

    public getColor(): string {
        return this.color;
    }

    public getGear(): string {
        return this.gear;
    }

    public getManufacturer(): string {
        return this.manufacturer;
    }

    public getYear(): string {
        return this.year;
    }

    constructor(plate: string, color: string, gear: string, manufacturer: string, year: string) {
        this.plate = plate;
        this.color = color;
        this.gear = gear;
        this.manufacturer = manufacturer;
        this.year = year;
    }


}
