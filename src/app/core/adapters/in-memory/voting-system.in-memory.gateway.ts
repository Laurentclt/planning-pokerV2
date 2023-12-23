import {VotingSystemModel} from "../../models/voting-system.model";
import {IdGenerator} from "./id-generator";
import {VotingSystemAbstractGateway} from "../../ports/voting-system.abstract.gateway";
import {CreateVotingSystemDTO} from "../../dtos/create-voting-system.dto";
import {signal, Signal, WritableSignal} from "@angular/core";

export class VotingSystemInMemoryGateway extends IdGenerator implements VotingSystemAbstractGateway{
    votingSystems: WritableSignal<VotingSystemModel[]> = signal([
        new VotingSystemModel(this.generateId(), "default", [1,2,3,4,5,6,7,8,9]),
        new VotingSystemModel(this.generateId(),"fibonacci", [1,2,3,5,8,13,21,34,55,89])
    ]);

    createVotingSystem(createVotingSystemDTO: CreateVotingSystemDTO): VotingSystemModel {
       const createdVotingSystem: VotingSystemModel = new VotingSystemModel(this.generateId(), createVotingSystemDTO.name, createVotingSystemDTO.values);
       this.votingSystems.update((arr: VotingSystemModel[]) =>  {
           arr.push(createdVotingSystem);
           return arr;
       })
       return createdVotingSystem;
    }

    getVotingSystems(): VotingSystemModel[] {
        return this.votingSystems();
    }

    watchVotingSystems(): Signal<VotingSystemModel[]> {
        return this.votingSystems;
    }
}
