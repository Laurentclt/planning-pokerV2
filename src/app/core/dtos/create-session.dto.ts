import {VotingSystemModel} from "../models/voting-system.model";

export interface CreateSessionDTO {
    name: string;
    votingSystem: VotingSystemModel;
}
