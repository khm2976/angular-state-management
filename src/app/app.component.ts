import { Component } from '@angular/core';

import { StoreService } from './shared/store.service';
import { Category, Product } from './shared/state.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    category1: Category;
    category2: Category;
    product: Product;

    constructor(
        private store: StoreService,
    ) {
    }
    
    ngOnInit() {
        // 초기 렌더를 위해 한번만 렌더
        this.store.getState().subscribe(state => {
            console.log('[state]', state);
            this.category1 = state.category1;  // 카테고리1
            this.category2 = state.category2;  // 카테고리2
            this.product = state.product;    // 상세
        });

        this.store.setState({
            category1: {
                category_code: 999,
                category_name: '상태 변화1',
                sub: [{
                    category_code: 111,
                    category_name: '상태 변화1',
                }, {
                    category_code: 222,
                    category_name: '상태 변화2',
                }]
            },
            category2: {
                category_code: 999,
                category_name: '상태 변화2',
                sub: [{
                    category_code: 111,
                    category_name: '상태 변화1',
                }, {
                    category_code: 222,
                    category_name: '상태 변화2',
                }]
            },
            product: {
                name: '상품 테스트',
                itemNo: 12345,
                imageUrl: 'https://'
            }
        });

        setTimeout(()=>{
            this.store.setState({
                product: {
                    name: '상품 테스트222',
                    itemNo: 67890,
                    imageUrl: 'https://'
                }
            });
        }, 10000)
    }
}
