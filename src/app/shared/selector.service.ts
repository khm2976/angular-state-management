import { Injectable } from '@angular/core';
import { map, distinctUntilChanged } from 'rxjs/operators';

import { StoreService } from './store.service';

// 특정 상태값을 구독하기 위한 서비스
@Injectable()
export class SelectorService {
    constructor(
        private store: StoreService,
    ) {
    }

    // 프로덕트 정보
    selectorProduct = () => {
        return  this.store.getState().pipe(
                    map(state => state.product),
                    distinctUntilChanged()
                );
    }

}
