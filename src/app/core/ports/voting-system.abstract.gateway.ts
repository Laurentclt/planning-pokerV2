import {VotingSystemModel} from "../models/voting-system.model";
import {CreateVotingSystemDTO} from "../dtos/create-voting-system.dto";
import {Signal} from "@angular/core";

export abstract class VotingSystemAbstractGateway {

    public abstract createVotingSystem(createVotingSystemDTO: CreateVotingSystemDTO): VotingSystemModel;
    public abstract getVotingSystems(): VotingSystemModel[];
    public abstract watchVotingSystems(): Signal<VotingSystemModel[]>;
}
