import { Component } from '@angular/core';
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
export class HomeComponent {
    createSessionForm: FormGroup = new FormGroup<{sessionName: FormControl, votingSystem: FormControl}>({
        sessionName: new FormControl<string | null>(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)] ),
        votingSystem: new FormControl<VotingSystemModel | null>(null, Validators.required)
    })

    get sessionName() {return this.createSessionForm.get("sessionName")}
    get votingSystem() {return this.createSessionForm.get("votingSystem")}
    public onSubmit(): void {
        this.createSessionForm.markAllAsTouched();
        console.log(this.createSessionForm.value);
    }

}
