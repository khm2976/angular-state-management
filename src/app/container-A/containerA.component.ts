import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Category } from '../shared/state.model';

@Component({
    selector: 'app-container-a',
    templateUrl: './containerA.component.html',
    styleUrls: ['./containerA.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerAComponent implements OnInit {
    @Input() category1: Category;
    @Input() category2: Category;

    constructor(
    ) {}

    ngOnInit() {
    }
}
