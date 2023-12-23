import {PlayerAbstractGateway} from "../../ports/player.abstract.gateway";
import {CreatePlayerDTO} from "../../dtos/create-player.dto";
import {inject, signal, Signal} from "@angular/core";
import {PlayerModel} from "../../models/player.model";
import {Firestore, collectionData, collection, addDoc} from '@angular/fire/firestore';

export class PlayerFirestoreGateway implements PlayerAbstractGateway {
    firestore: Firestore = inject(Firestore);

    async createPlayer(createPlayerDTO: CreatePlayerDTO): Signal<PlayerModel> {
       const colRef = collection(this.firestore, "players");
       const docSnap = await addDoc(colRef, createPlayerDTO);
       return signal({id: docSnap.id, ...createPlayerDTO})
    }

    getPlayer(): PlayerModel {
        return undefined;
    }

    getPlayersFromSession(sessionId: string): PlayerModel[] {
        return [];
    }

    watchPlayer(): Signal<PlayerModel> {
        return undefined;
    }

    watchPlayersFromSession(sessionId: string): Signal<PlayerModel[]> {
        return undefined;
    }

}
