import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../shared/state.model';

@Component({
    selector: 'app-container-b',
    templateUrl: './containerB.component.html',
    styleUrls: ['./containerB.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerBComponent implements OnInit {
    @Input() product: Product;

    constructor(
    ) {}

    ngOnInit() {
    }
}
