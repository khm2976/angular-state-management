import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AppState } from './state.model';

@Injectable()
export class StoreService {
    private stateSubject: BehaviorSubject<AppState>;
    // 상태관리를 위한 초기값 설정
    private initialState: AppState = {
        category1: null,
        category2: null,
        product: null,
    };
    constructor() {
        this.stateSubject = new BehaviorSubject(this.initialState);
    }

    public getStateValue(): AppState {
        return this.stateSubject.getValue();
    }

    public getState() {
        return this.stateSubject.asObservable();
    }

    /*
    * 상태 업데이트 될때마다 컴포넌트에서 구독 할수 있도록 dispatch
    */
    public setState(state: Partial<AppState>) {
        const currentState = this.getStateValue();
        const nextState = {...currentState, ...state};
        this.stateSubject.next( nextState );
    }
}
