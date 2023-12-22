import { Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {SessionComponent} from "./views/session/session.component";

export const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: "home"},
    {component: HomeComponent, path: "home"},
    {component: SessionComponent, path: "session"},
];
