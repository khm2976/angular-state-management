import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../shared/state.model';

@Component({
    selector: 'app-container-b',
    templateUrl: './containerB.component.html',
    styleUrls: ['./containerB.component.css']
})
export class ContainerBComponent implements OnInit {
    product: Product;

    constructor(
        private http: HttpClient,
    ) {}

    ngOnInit() {
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
