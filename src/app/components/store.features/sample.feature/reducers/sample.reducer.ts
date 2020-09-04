import {createReducer, on} from "@ngrx/store";
import {SampleState, initialSampleState} from "../state/sample.state";
import {sampleAction} from "../actions/sample.action";


export const SampleReducer = createReducer(
    initialSampleState,
    on(sampleAction, (state, action) => ({...state,sampleString:'set string'})),
);



