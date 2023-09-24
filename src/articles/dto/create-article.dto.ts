import { ApiProperty } from "@nestjs/swagger";
import {
    IsBoolean,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    MinLength,
} from 'class-validator';
export class CreateArticleDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @ApiProperty()
    title: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    @ApiProperty()
    @ApiProperty({ required: false })
    description?: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @ApiProperty()
    body: string;

    @IsBoolean()
    @IsOptional()
    @ApiProperty({ required: false, default: true })
    published?: boolean;
}