import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { DummyService } from './dummy.service';
import { Dummy } from './dummy.entity';
import { CreateDummyDto } from './create-dummy.dto';

@Controller('dummy')
export class DummyController {
    constructor(private readonly dummyService: DummyService) { }

    @Get('/:id')
    async getDummy(@Param('id') id: string) {
        return await this.dummyService.getDummy(id);
    }

    @Post()
    async createDummy(@Body() body: CreateDummyDto) {
        const dummy = await this.dummyService.createDummy(body.name)
        return dummy
    }
}
