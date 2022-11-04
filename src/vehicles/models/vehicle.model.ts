export class Vehicle {
    private color: string;
    private gear: string;
    private manufacturer: string;
    private year: string;

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

    constructor(color: string, gear: string, manufacturer: string, year: string){
        this.color = color;
        this.gear = gear;
        this.manufacturer = manufacturer;
        this.year = year;
    }


}
