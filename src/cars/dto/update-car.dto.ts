import { IsInt, isInt, IsOptional, IsString, IsUUID, MinLength } from "class-validator";


export class UpdateCarDto {

    @IsString({ message: 'La marca es requerida y debe ser un string' })
    @IsOptional()
    @MinLength(3, {
        message: 'El modelo debe tener 3 o mas caracteres'
    })
    readonly brand: string;

    @IsString({ message: 'El modelo es requerido y debe ser un string' })
    @IsOptional()
    @MinLength(3, {
        message: 'El modelo debe tener 3 o mas caracteres'
    })
    readonly model: string;
    
}