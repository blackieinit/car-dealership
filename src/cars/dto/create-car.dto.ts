import { IsString, MinLength } from "class-validator";


export class CreateCarDto {

    @IsString({ message: 'El modelo es requerido y debe ser un string' })
    readonly brand: string;

    @IsString()
    @MinLength(3, {
        message: 'El modelo debe tener 3 o mas caracteres'
    })
    readonly model: string;
    
}