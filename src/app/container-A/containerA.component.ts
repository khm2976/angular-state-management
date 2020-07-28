import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from '../shared/state.model';
import { StoreService } from '../shared/store.service';

@Component({
    selector: 'app-container-a',
    templateUrl: './containerA.component.html',
    styleUrls: ['./containerA.component.css'],
})
export class ContainerAComponent implements OnInit {
    @Input() category1: Category;
    @Input() category2: Category;

    constructor(
        private http: HttpClient,
        private store: StoreService,
    ) {}

    ngOnInit() {
    }

    getCate1() {
        this.http
            .get('/assets/mock/category1.json')
            .subscribe(res => {
                //this.cate1 = res as Category;
                //console.log(this.cate1);
            });
    }

    getCate2() {
        this.http
            .get('/assets/mock/category2.json')
            .subscribe(res => {
                //this.cate2 = res as Category;
            });
    }
}
