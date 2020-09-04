import {createFeatureSelector, createSelector} from "@ngrx/store";
import {SampleState} from "../state/sample.state";


export const selectSampleStore = createFeatureSelector('sampleStateKey');

export const isAppInit = createSelector(
    selectSampleStore,
    (state:SampleState)=> state.sampleString
)
