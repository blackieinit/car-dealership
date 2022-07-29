import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto} from './dto';
import { Car } from './interfaces/car.interface';

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

    create( createCarDto: CreateCarDto ) {

        const findCar = this.cars.find( car => car.model.toLowerCase() === createCarDto.model.toLowerCase() 
                                            && car.brand.toLowerCase() === createCarDto.brand.toLowerCase())

        if ( findCar ) throw new BadRequestException(`The car exist`);

        const newCar: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push(newCar);
        
        return newCar;
    }
    
    update( id: string, updateCarDto: UpdateCarDto) {

        let findCar = this.findOneById( id );

        this.cars = this.cars.map( car => {
            if ( car.id === id ) {
                findCar = { ...findCar,...updateCarDto };
                return findCar; 
            }

            return car;
        })

        return findCar;
    }

    delete( id: string) {
        this.findOneById( id );

        this.cars = this.cars.filter( ( car ) => car.id !== id);

    }
} 
