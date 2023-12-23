import {CreateSessionDTO} from "../dtos/create-session.dto";
import {SessionModel} from "../models/session.model";
import {Signal} from "@angular/core";

export abstract class SessionAbstractGateway {

    public abstract createSession(createSessionDTO: CreateSessionDTO): SessionModel;
    public abstract getSessions(): SessionModel[];
    public abstract watchSessions(): Signal<SessionModel[]>;
    public abstract getSession(sessionId: string): SessionModel;
    public abstract watchSession(sessionId: string): Signal<SessionModel>;
}
