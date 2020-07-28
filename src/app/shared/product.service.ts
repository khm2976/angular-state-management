/**
 * api 응답값에 대하여 상태로 처리하는 서비스
 */
import { Injectable } from '@angular/core';

import { RequestDataService } from './request-data.service';
import { Observable } from 'rxjs';
import { AppState, Category, Product } from './state.model';
import { StoreService } from './store.service';

//  API 정보를 이용하여 상태모델로 만들어 준다.
@Injectable()
export class ProductService {

    constructor(
        private requestDataService: RequestDataService,
        private store: StoreService,
    ) {
    }

    getDatas(): Observable<any> {
        return Observable.create(observer => {
            this.requestDataService.getDatas()
            .subscribe(data => {
                console.log('완료')
                const stateData: AppState = {
                    ...this.store.getStateValue(),
                    category1: data.category1 as Category,
                    category2: data.category2 as Category,
                    product: data.product as Product,
                };
                this.store.setState(stateData);

                // 데이터 셋 구성 완료를 날리기 위한 옵저버
                observer.next();
                observer.complete();
            }, err => observer.error(err));
        });
    }
}
