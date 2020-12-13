import { Body, Controller, Get, Header, Post, Query } from '@nestjs/common';
import { INSTANCE_METADATA_SYMBOL } from '@nestjs/core/injector/instance-wrapper';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { PersonDto } from './dto/person.dto';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
    constructor(
        private readonly helloService: HelloService
    ) {}
    @ApiResponse({status: 200, description: 'Say Hello!!!'})
    @Post('welcome')
    @Header('Content-Type', 'application/json')
    async sayWelcome(@Body() personDto: PersonDto): Promise<{data: String}> {
        let msg = await this.helloService.welcome(personDto);
        return {data : msg};
    }

    @ApiResponse({status: 200})
    @ApiQuery({
        name: 'name',
        required: true,
        type: String
    })
    @Get('welcome')
    async sayWelcome2(@Query('name') iName, @Query('year') iYear): Promise<{data: String}> {
        let msg = await this.helloService.welcome({name: iName, year : iYear});
        return {data: msg};
    }
}
