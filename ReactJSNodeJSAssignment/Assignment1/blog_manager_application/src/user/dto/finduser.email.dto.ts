import { IsEmail } from "class-validator";

export class FindUserEmail {
  
    @IsEmail()
    email: string;
}
  