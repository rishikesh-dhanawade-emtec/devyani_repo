import { Gender } from "../user.entity";
export interface UpdateProfileDto {
    firstName: string;
    lastName: string;
    password: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    birthDate: Date;
    gender: Gender;
}
