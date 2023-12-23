import {SessionAbstractGateway} from "../../ports/session.abstract.gateway";
import {CreateSessionDTO} from "../../dtos/create-session.dto";
import {SessionModel} from "../../models/session.model";
import {IdGenerator} from "./id-generator";
import {signal, Signal, WritableSignal} from "@angular/core";

export class SessionInMemoryGateway extends IdGenerator implements SessionAbstractGateway {
    sessions: WritableSignal<SessionModel[]> = signal([
        {id: this.generateId(), name: "Sprint Janvier"},
        {id: this.generateId(), name: "Sprint Fevrier"},
        {id: this.generateId(), name: "Sprint Mars"},
        {id: this.generateId(), name: "Sprint Avril"}
    ])

    public createSession(createSessionDTO: CreateSessionDTO): SessionModel {
        const id: string = this.generateId();
        const sessionCreated: SessionModel = {id, ...createSessionDTO};
        this.sessions.update((arr: SessionModel[]) => {
            arr.push(sessionCreated)
            return arr;
        })
        return sessionCreated;
    }

    public getSessions(): SessionModel[] {
        return this.sessions();
    }

    public watchSessions(): Signal<SessionModel[]> {
        return this.sessions.asReadonly();
    }
}
