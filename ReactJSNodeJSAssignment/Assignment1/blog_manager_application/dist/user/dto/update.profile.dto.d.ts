import { Gender } from "../user.entity";
export declare class UpdateProfileDto {
    firstName: string;
    lastName: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    birthDate: Date;
    gender: Gender;
}
