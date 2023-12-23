import {Component, inject, OnInit, Signal} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {ActivatedRoute} from "@angular/router";
import {SessionAbstractGateway} from "../../core/ports/session.abstract.gateway";
import {SessionModel} from "../../core/models/session.model";
import {PlayerModel} from "../../core/models/player.model";
import {PlayerAbstractGateway} from "../../core/ports/player.abstract.gateway";

@Component({
  selector: 'app-session',
  standalone: true,
    imports: [
        MatCardModule
    ],
  templateUrl: './session.component.html',
  styleUrl: './session.component.css'
})
export class SessionComponent implements OnInit {
    route: ActivatedRoute = inject(ActivatedRoute);
    sessionGateway: SessionAbstractGateway = inject(SessionAbstractGateway);
    playerGateway: PlayerAbstractGateway = inject(PlayerAbstractGateway);
    session: Signal<SessionModel> = this.sessionGateway.watchSession(this.route.snapshot.params["id"]);
    players: Signal<PlayerModel[]> = this.playerGateway.watchPlayersFromSession(this.session().id)
    ngOnInit(): void {
    }
}
