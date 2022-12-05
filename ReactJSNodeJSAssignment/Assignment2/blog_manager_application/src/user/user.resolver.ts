import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Gender } from "./user.entity";
import { UserService } from "./user.service";
import { User } from "./user.type";

@Resolver((forType) => User)
export class UserResolver {

    constructor(private userService: UserService) { }

    @Mutation((returns) => User)
    signup(@Args('firstName') firstName: string, @Args('lastName') lastName: string, @Args('email') email: string, @Args('password') password: string) {
        return this.userService.signup(firstName, lastName, email, password)
    }

    @Query((returns) => User)
    signin(@Args('email') email: string, @Args('password') password: string) {
        return this.userService.signin(email, password)
    }

    @Query((returns) => User) 
    findUser(@Args('id') id: number) {
        return this.userService.findUser(id);
    }

    @Query((returns) => [User])
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Mutation((returns) => User)
    updateProfile(@Args('id') id: number,
        @Args('firstName') firstName: string,
        @Args('lastName') lastName: string,
        @Args('city') city: string,
        @Args('gender') gender: Gender,
        @Args('country') country: string,
        @Args('state') state: string,
        @Args('postalCode') postalCode: string,
        @Args('birthDate') birthDate: Date) {
        return this.userService.updateProfile(id, firstName, lastName, city, gender, country, state, postalCode, birthDate);
    }

}