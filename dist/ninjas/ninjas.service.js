"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NinjasService = void 0;
const common_1 = require("@nestjs/common");
let NinjasService = exports.NinjasService = class NinjasService {
    constructor() {
        this.ninjas = [
            { id: 1, name: "Peter", weapon: "stars" },
            { id: 2, name: "John", weapon: "nunchuks" },
        ];
    }
    getNinjas(weapon) {
        if (weapon) {
            return this.ninjas.filter(e => e.weapon === weapon);
        }
        else {
            return this.ninjas;
        }
    }
    getOneNinja(id) {
        let ninja = this.ninjas.find(e => e.id === id);
        if (!ninja) {
            throw new Error("Ninja Not Found!");
        }
        else
            return ninja;
    }
    insertNinja(data) {
        let newNinja = { ...data, id: Math.floor(Math.random() * 1000000) };
        this.ninjas.push(newNinja);
        return "Ninja added successfully with Id: " + newNinja.id;
    }
    updateNinja(id, data) {
        let updated = false;
        this.ninjas.map(n => {
            if (n.id === id) {
                if (data.name)
                    n.name = data.name;
                if (data.weapon)
                    n.weapon = data.weapon;
                updated = true;
            }
        });
        if (updated)
            return "Ninja Updated Successfully!";
        else
            return "Ninja Not found!";
    }
    deleteNinja(id) {
        let originalLength = this.ninjas.length;
        this.ninjas = this.ninjas.filter(n => n.id !== id);
        if (this.ninjas.length !== originalLength)
            return "Ninja Deleted Successfully!";
        else
            return "Ninja Not Found!";
    }
};
exports.NinjasService = NinjasService = __decorate([
    (0, common_1.Injectable)()
], NinjasService);
//# sourceMappingURL=ninjas.service.js.map