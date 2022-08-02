/* import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {

    @IsString()
    @MinLength(1)
    readonly name: string;

}*/

import { IsString, MinLength } from "class-validator";


export class UpdateBrandDto {
    @IsString()
    @MinLength(1)
    readonly name: string;
}