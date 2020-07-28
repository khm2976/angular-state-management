import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../shared/state.model';
import { StoreService } from '../shared/store.service';
import { SelectorService } from '../shared/selector.service';

@Component({
    selector: 'app-container-b',
    templateUrl: './containerB.component.html',
    styleUrls: ['./containerB.component.css'],
})
export class ContainerBComponent implements OnInit {
    product: Product;

    constructor(
        private http: HttpClient,
        private store: StoreService,
        private selector: SelectorService,
    ) {}

    ngOnInit() {
        // 상태 변화에 대해 구독.
        this.store.getState().subscribe(state => {
            console.log('[state]', state);
        });
        this.selector.selectorProduct().subscribe(state => {
            console.log("프로덕트")
            console.log(state)
        })
        this.getProduct();
    }

    getProduct() {
        this.http
            .get('/assets/mock/detail.json')
            .subscribe(res => {
                this.product = res as Product;
            });
    }
}
