import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            model: "Corolla",
            brand: "Toyota"
        },
        {
            id: 2,
            model: "Jeep",
            brand: "Cherokee"
        },
        {
            id: 3,
            model: "H3",
            brand: "Hummer"
        }
    ];

    findAll() {
        return this.cars;
    }

    findOneById( id: number ) {

        const car = this.cars.find( car => car.id === id );
        
        if ( !car ) throw new NotFoundException(`Car with id '${id}' not found`);

        return car;
    }
} 
