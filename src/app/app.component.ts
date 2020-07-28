import { Component } from '@angular/core';
import { take } from 'rxjs/operators';

import { StoreService } from './shared/store.service';
import { Category, Product } from './shared/state.model';
import { ProductService } from './shared/product.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ProductService],
})
export class AppComponent {
    category1: Category;
    category2: Category;
    product: Product;

    constructor(
        private store: StoreService,
        private productService: ProductService,
    ) {
    }
    
    ngOnInit() {
        // API 를 한곳에 모아서 처리한다.
        this.productService.getDatas().subscribe(()=>{
            // API 호출 완료후 초기 렌더를 위해 한번만 렌더
            this.store.getState()
                .pipe(take(1)).subscribe(state => {
                console.log('[state]', state);
                this.category1 = state.category1;
                this.category2 = state.category2;
                this.product = state.product;
            });
        });
    }
}
