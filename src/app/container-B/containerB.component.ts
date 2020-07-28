import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';

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
        console.log(111)
        this.http
            .get('/assets/mock/detail.json')
            .subscribe(res => {
                this.product = res as Product;
                console.log(this.product)
            });
    }
}
