import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
export declare class NinjasController {
    private readonly ninjasService;
    constructor(ninjasService: NinjasService);
    getNinjas(weapon: 'stars' | 'nunchuks'): {
        id: number;
        name: string;
        weapon: string;
    }[];
    getOneNinja(id: number): {
        id: number;
        name: string;
        weapon: string;
    };
    createNinja(reqBody: CreateNinjaDto): string;
    updateNinja(id: number, reqBody: UpdateNinjaDto): "Ninja Updated Successfully!" | "Ninja Not found!";
    deleteNinja(id: number): "Ninja Deleted Successfully!" | "Ninja Not Found!";
}
