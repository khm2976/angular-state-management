import { Injectable } from '@angular/core';
import { map, distinctUntilChanged } from 'rxjs/operators';

import { StoreService } from './store.service';

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
