import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
export declare class NinjasService {
    private ninjas;
    getNinjas(weapon?: 'stars' | 'nunchuks'): {
        id: number;
        name: string;
        weapon: string;
    }[];
    getOneNinja(id: number): {
        id: number;
        name: string;
        weapon: string;
    };
    insertNinja(data: CreateNinjaDto): string;
    updateNinja(id: number, data: UpdateNinjaDto): "Ninja Updated Successfully!" | "Ninja Not found!";
    deleteNinja(id: number): "Ninja Deleted Successfully!" | "Ninja Not Found!";
}
