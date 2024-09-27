import { IsString } from "class-validator"

export class CreateDummyDto {
    @IsString()
    name: string
}