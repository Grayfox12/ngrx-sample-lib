
//This one is work 
import {CommonModule} from "@angular/common";
import {Inject, Injector, NgModule} from "@angular/core";
import {
    combineReducers,
    FEATURE_REDUCERS,
    STORE_FEATURES,
    StoreFeatureModule,
    ɵngrx_modules_store_store_bh as _actionTypeUniquenessCheck,
    ɵngrx_modules_store_store_m as _FEATURE_REDUCERS,
    ɵngrx_modules_store_store_n as _FEATURE_CONFIGS,
    ɵngrx_modules_store_store_o as _STORE_FEATURES,
    ɵngrx_modules_store_store_p as _FEATURE_REDUCERS_TOKEN,
    ɵngrx_modules_store_store_s as _ACTIVE_RUNTIME_CHECKS,
    ɵngrx_modules_store_store_t as _ACTION_TYPE_UNIQUENESS_CHECK,
    ɵngrx_modules_store_store_v as _createFeatureStore,
    ɵngrx_modules_store_store_w as _createFeatureReducers
} from "@ngrx/store";
import {
    EffectsFeatureModule,
    USER_PROVIDED_EFFECTS,
    ɵngrx_modules_effects_effects_b as createEffects,
    ɵngrx_modules_effects_effects_g as _FEATURE_EFFECTS,
    ɵngrx_modules_effects_effects_h as FEATURE_EFFECTS
} from "@ngrx/effects";
import {SampleReducer} from "./reducers/sample.reducer";
import {sampleEffect} from "./effects/sample.effect";

@NgModule({
    imports: [
        CommonModule,
        StoreFeatureModule,
        EffectsFeatureModule
    ],
    providers:[
        sampleEffect,
        {
            provide: _FEATURE_CONFIGS,
            multi: true,
            useValue: {},
        },
        {
            provide: STORE_FEATURES,
            multi: true,
            useValue: {
                key: 'sampleStateKey',
                reducerFactory: combineReducers,
                metaReducers:[],
                initialState: undefined,
            },
        },
        {
            provide: _STORE_FEATURES,
            deps: [Injector, _FEATURE_CONFIGS, STORE_FEATURES],
            useFactory: _createFeatureStore,
        },
        { provide: _FEATURE_REDUCERS, multi: true, useValue: SampleReducer },
        {
            provide: _FEATURE_REDUCERS_TOKEN,
            multi: true,
            useExisting: _FEATURE_REDUCERS,
        },
        {
            provide: FEATURE_REDUCERS,
            multi: true,
            deps: [Injector, _FEATURE_REDUCERS, [new Inject(_FEATURE_REDUCERS_TOKEN)],
            ],
            useFactory: _createFeatureReducers,
        },
        {
            provide: _ACTION_TYPE_UNIQUENESS_CHECK,
            multi: true,
            deps: [_ACTIVE_RUNTIME_CHECKS],
            useFactory: _actionTypeUniquenessCheck,
        },
        sampleEffect,
        {
            provide: _FEATURE_EFFECTS,
            multi: true,
            useValue: sampleEffect,
        },
        {
            provide: USER_PROVIDED_EFFECTS,
            multi: true,
            useValue: [],
        },
        {
            provide: FEATURE_EFFECTS,
            multi: true,
            useFactory: createEffects,
            deps: [Injector, _FEATURE_EFFECTS, USER_PROVIDED_EFFECTS],
        }
    ]
})
export class SampleFeatureModule { }
//this one not work
/*
import {EffectsModule} from "@ngrx/effects";
import {Action, State, StoreModule} from "@ngrx/store";
import {CommonModule} from "@angular/common";
import {sampleEffect} from "./effects/sample.effect";
import {NgModule} from "@angular/core";
import {SampleReducer} from "./reducers/sample.reducer";
import {SampleState} from "./state";

export function sampleReducerFabric(state: SampleState | undefined, action: Action) {
    return SampleReducer(state, action);
}

@NgModule({
    imports: [
        CommonModule,
        EffectsModule.forFeature([sampleEffect]),
        StoreModule.forFeature('sampleStateKey',sampleReducerFabric)

    ]
})
export class SampleFeatureModule { }*/
