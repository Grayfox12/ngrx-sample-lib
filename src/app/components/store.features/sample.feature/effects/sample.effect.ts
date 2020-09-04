import {Injectable, Injector} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Observable} from "rxjs";
import { sampleAction } from "../actions";
import {tap} from "rxjs/operators";

@Injectable()
export class sampleEffect {

    constructor(private injector: Injector, private _actions: Actions) {
    }

    sampleActionEffect = createEffect((): Observable<any> => {
        return this._actions.pipe(
            ofType(sampleAction),
            tap(()=>console.log('action'))
        )
    },{dispatch:false});
}
