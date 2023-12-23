import {PlayerModel} from "../models/player.model";
import {CreatePlayerDTO} from "../dtos/create-player.dto";
import {Signal} from "@angular/core";

export abstract class PlayerAbstractGateway {

    abstract createPlayer(createPlayerDTO: CreatePlayerDTO): Signal<PlayerModel>;

    abstract getPlayer(): PlayerModel;
    abstract watchPlayer(): Signal<PlayerModel>;

    abstract getPlayersFromSession(sessionId: string): PlayerModel[];
    abstract watchPlayersFromSession(sessionId: string): Signal<PlayerModel[]>;
}
