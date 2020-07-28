/**
 * 초기 렌더에 필요한 api 호출
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class RequestDataService {

    constructor(
        private http: HttpClient,        
    ) {
    }

    getDatas() {
        // 필수 API
        const url = [
            this.getCategory1(),
            this.getCategory2(),
            this.getProduct(),
        ];

        return forkJoin(url)
        .pipe(
            map(list => {
                // 배열 순서 상관없이 타입 네임으로 접근 할수 있도록 object 형태로 만들어 준다.
                const data = list.reduce((
                    previousValue: any,
                    currentValue: { type: string; success: boolean; value: Error | any; }
                ) => {
                    return { ...previousValue,
                        [currentValue['type']]: currentValue['success'] ? currentValue['value'] : null };
                }, { });

                return data;
            })
        );
    }

    getCategory1() {
        return this.http
        .get('/assets/mock/category1.json')
        .pipe(
            map(res => this.endRequest('category1', res)),
            catchError( error => this.handleError('category1', error))
        );
    }

    getCategory2() {
        return this.http
        .get('/assets/mock/category2.json')
        .pipe(
            map(res => this.endRequest('category2', res)),
            catchError( error => this.handleError('category2', error))
        );
    }

    getProduct() {
        return this.http
        .get('/assets/mock/detail.json')
        .pipe(
            map(res => this.endRequest('product', res)),
            catchError( error => this.handleError('product', error))
        );
    }
    
    /**
     * API 응답결과 처리(type으로 API 구분위한 처리)
     * @param   {string}  type  API 구분값
     * @param   {string}  value  API 응답값
     * @param   {string}  success  API 응답성공 여부
     */
    endRequest(type: string, value: any, success = true) {
        return { type, success, value };
    }

    // forkjoin Observable 중단되지 않도록 에러처리
    handleError(type: string, error: any) {
        console.error('An error occurred', error);

        return of(this.endRequest(type, new Error(error), false));
    }
}
