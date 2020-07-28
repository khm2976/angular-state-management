import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from '../product.model';

@Component({
    selector: 'app-container-a',
    templateUrl: './containerA.component.html',
    styleUrls: ['./containerA.component.css']
})
export class ContainerAComponent implements OnInit {
    cate1: Category;
    cate2: Category;
    constructor(
        private http: HttpClient,
    ) {}

    ngOnInit() {
        this.getCate1();
        this.getCate2();
    }

    getCate1() {
        this.http
            .get('/assets/mock/category1.json')
            .subscribe(res => {
                this.cate1 = res as Category;
                console.log(this.cate1);
            });
    }

    getCate2() {
        this.http
            .get('/assets/mock/category2.json')
            .subscribe(res => {
                this.cate2 = res as Category;
                console.log(this.cate1);
            });
    }
}
