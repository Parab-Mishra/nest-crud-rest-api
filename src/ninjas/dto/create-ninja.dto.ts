import { IsEnum, MinLength } from "class-validator";

export class CreateNinjaDto {
    id: number;

    @MinLength(10)
    name: string;

    @IsEnum(['stars', 'sword', 'nunchuks'], {message: "Invalid weapon type!"})
    weapon: string;
}
