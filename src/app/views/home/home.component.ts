import {Component, inject, OnInit} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTableModule} from "@angular/material/table";
import {MatExpansionModule} from "@angular/material/expansion";
import {VotingSystemModel} from "../../core/models/voting-system.model";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {SessionAbstractGateway} from "../../core/ports/session.abstract.gateway";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import {SessionModel} from "../../core/models/session.model";
import {VotingSystemAbstractGateway} from "../../core/ports/voting-system.abstract.gateway";


@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        MatButtonToggleModule,
        MatTableModule,
        MatExpansionModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        CommonModule
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
    router: Router = inject(Router);
    votingSystemGateway: VotingSystemAbstractGateway = inject(VotingSystemAbstractGateway);
    sessionGateway: SessionAbstractGateway = inject(SessionAbstractGateway);
    voteSystems: VotingSystemModel[] = [];

    createSessionForm: FormGroup = new FormGroup<{ sessionName: FormControl, votingSystem: FormControl }>({
        sessionName: new FormControl<string | null>(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
        votingSystem: new FormControl<VotingSystemModel | null>(null, Validators.required)
    })

    get sessionName() {
        return this.createSessionForm.get("sessionName")
    };

    get votingSystem() {
        return this.createSessionForm.get("votingSystem")
    };

    ngOnInit() {
        this.voteSystems = this.votingSystemGateway.getVotingSystems();
    }

    public onSubmit(): void {
        console.log("submited")
        this.createSessionForm.markAllAsTouched();
        const createdSession: SessionModel = this.sessionGateway.createSession(this.createSessionForm.value);
        this.redirectToCreatedSession(createdSession.id);
    }

    private redirectToCreatedSession(sessionId: string): void {
        const baseUrl: string = "/session/";
        this.router.navigateByUrl(baseUrl + sessionId)
    }
}
