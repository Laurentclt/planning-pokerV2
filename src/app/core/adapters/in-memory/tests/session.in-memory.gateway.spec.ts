import { TestBed } from '@angular/core/testing';
import {SessionInMemoryGateway} from "../session.in-memory.gateway";
simport {CreateSessionDTO} from "../../../dtos/create-session.dto";
import {VotingSystemModel} from "../../../models/voting-system.model";


describe('SessionInMemoryGateway', () => {
    let service: SessionInMemoryGateway;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SessionInMemoryGateway);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should create a session', () => {
        const count: number = service.sessions().length
        const createSessionDTO: CreateSessionDTO = {name: "test", votingSystem: new VotingSystemModel("1", "test", [1,2,3])}
        service.createSession(createSessionDTO)
        expect(service.sessions().length).toEqual(count + 1);
    })
});
