import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid'
import { Car } from './car.interface';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: uuid(),
            model: "Corolla",
            brand: "Toyota"
        },
        {
            id: uuid(),
            model: "Jeep",
            brand: "Cherokee"
        },
        {
            id: uuid(),
            model: "H3",
            brand: "Hummer"
        }
    ];

    findAll() {
        return this.cars;
    }

    findOneById( id: string ) {

        const car = this.cars.find( car => car.id === id );
        
        if ( !car ) throw new NotFoundException(`Car with id '${id}' not found`);

        return car;
    }
} 
