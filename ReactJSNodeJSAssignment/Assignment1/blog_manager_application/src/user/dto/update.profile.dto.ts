import { IsDate, IsDateString, IsNotEmpty, IsString } from "class-validator";
import { Gender } from "../user.entity";

export class UpdateProfileDto {

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsString()
    city: string;

    @IsString()
    state: string;

    @IsString()
    country: string;

    @IsString()
    postalCode:string;

    @IsDateString()
    birthDate: Date;

    @IsString()
    gender: Gender;

}