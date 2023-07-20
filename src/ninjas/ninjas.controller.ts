import { Controller, Delete, Get, Post, Put, Param, Body, Query, NotFoundException, ValidationPipe, UseGuards } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { NinjaGuard } from './ninja/ninja.guard';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService){}

    // GET /ninjas 
    @Get()
    getNinjas(@Query('weapon') weapon: 'stars' | 'nunchuks') {
        return this.ninjasService.getNinjas(weapon);
    }

    //GET /ninjas/:id
    @Get(':id')
    getOneNinja(@Param('id') id: number) {
        try {
            return this.ninjasService.getOneNinja(Number(id));
        } catch (error) {
            throw new NotFoundException;
        }
    }

    //POST /ninjas
    @Post()
    @UseGuards(NinjaGuard)
    createNinja(@Body(new ValidationPipe()) reqBody: CreateNinjaDto) {
        return this.ninjasService.insertNinja(reqBody);
    }

    //PUT /ninjas/:id
    @Put(':id')
    updateNinja(@Param('id') id: number, @Body() reqBody: UpdateNinjaDto){
        return this.ninjasService.updateNinja(Number(id), reqBody);
    }

    //DELETE /ninja/:id
    @Delete(':id')
    deleteNinja(@Param('id') id: number){
        return this.ninjasService.deleteNinja(Number(id));
    }
}
