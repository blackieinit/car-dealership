import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

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
    create( @Body() body:any) {
        return body
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
