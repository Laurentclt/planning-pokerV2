import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {SessionAbstractGateway} from "./core/ports/session.abstract.gateway";
import {SessionInMemoryGateway} from "./core/adapters/in-memory/session.in-memory.gateway";
import {VotingSystemInMemoryGateway} from "./core/adapters/in-memory/voting-system.in-memory.gateway";
import {VotingSystemAbstractGateway} from "./core/ports/voting-system.abstract.gateway";
import {PlayerAbstractGateway} from "./core/ports/player.abstract.gateway";
import {PlayerFirestoreGateway} from "./core/adapters/firestore/player.firestore.gateway";
import firebase from "firebase/compat";
import initializeApp = firebase.initializeApp;
import {environmentProd} from "./environments/environment.prod";
import {provideFirebaseApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {environmentDev} from "./environments/environment.dev";

const useFirestore: boolean = false;
const useInMemory: boolean = true;

export const appConfig: ApplicationConfig = {

    providers: [
        provideRouter(routes),
        provideAnimations(),

    ]
};
if (useFirestore) {
    appConfig.providers.push(
        importProvidersFrom([
            provideFirebaseApp(() => initializeApp(environmentDev.firebaseConfig)),
            provideFirestore(() => getFirestore()),
        ]),
        {provide: PlayerAbstractGateway, useClass: PlayerFirestoreGateway},
    )

} else if (useInMemory) {
    appConfig.providers.push(
        {provide: SessionAbstractGateway, useClass: SessionInMemoryGateway},
        {provide: VotingSystemAbstractGateway, useClass: VotingSystemInMemoryGateway},
    )
}

