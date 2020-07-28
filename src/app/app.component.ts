import { Component } from '@angular/core';

import { StoreService } from './shared/store.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(
        private store: StoreService,
    ) {
    }
    
    ngOnInit() {
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
                category_name: '상태 변화1',
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
        }, 3000)
    }
}
