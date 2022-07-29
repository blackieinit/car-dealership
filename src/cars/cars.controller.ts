import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
    
    constructor (
        private readonly carsService: CarsService
    ) {}
    
    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseUUIDPipe) id: string ) {
        return this.carsService.findOneById( id ); 

    }

    @Post()
    @UsePipes(ValidationPipe)
    create( @Body() createCarDto: CreateCarDto) {
        return this.carsService.create( createCarDto );
    }

    @Patch(':id')
    update( 
        @Param('id' ) id:string,
        @Body() body:any) 
    {
        return body
    }

    @Delete(':id')
    delete( @Param('id') id:string) {
        return {
            method: "DELETE",
            id
        }
    }
    
}
