import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
    private ninjas = [
        {id: 1, name: "Peter", weapon: "stars"},
        {id: 2, name: "John", weapon: "nunchuks"},
    ];

    getNinjas(weapon?: 'stars' | 'nunchuks'){
        if(weapon){
            return this.ninjas.filter(e => e.weapon === weapon);
        }
        else{
            return this.ninjas;
        }
    }

    getOneNinja(id: number){
        let ninja = this.ninjas.find(e => e.id === id);
        if(!ninja){
            throw new Error("Ninja Not Found!");
        }
        else return ninja;
    }

    insertNinja(data: CreateNinjaDto){
        let newNinja = {...data, id: Math.floor(Math.random()*1000000)};
        this.ninjas.push(newNinja);
        return "Ninja added successfully with Id: " + newNinja.id;
    }

    updateNinja(id: number, data: UpdateNinjaDto){
        let updated = false;
        this.ninjas.map(n => {
            if(n.id === id){
                if(data.name) n.name = data.name;
                if(data.weapon) n.weapon = data.weapon;
                updated = true;
            }
        });
        if(updated) return "Ninja Updated Successfully!";
        else return "Ninja Not found!";
    }

    deleteNinja(id: number){
        let originalLength = this.ninjas.length;
        this.ninjas = this.ninjas.filter(n => n.id !== id);
        if(this.ninjas.length !== originalLength) return "Ninja Deleted Successfully!";
        else return "Ninja Not Found!";
    }
}
