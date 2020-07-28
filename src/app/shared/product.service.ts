/**
 * api 응답값에 대하여 상태로 처리하는 서비스
 */
import { Injectable } from '@angular/core';

import { RequestDataService } from './request-data.service';
import { Observable } from 'rxjs';

//  API 정보를 이용하여 상태모델로 만들어 준다.
@Injectable()
export class ProductService {

    constructor(
        private requestDataService: RequestDataService,
    ) {
    }

    getDatas(): Observable<any> {
        return Observable.create(observer => {
            this.requestDataService.getDatas()
            .subscribe(data => {
                console.log(data);
               /* const category = data.itemDetail.front_category_info && data.itemDetail.front_category_info.length
                ? data.itemDetail.front_category_info[0]
                : null;
                const stateData: AppState = {
                    ...this.store.getStateValue(),
                    itemDetail: data.itemDetail,
                    banner: this.getBanner(data.banner),
                    heartProductList: data.heartProductList ? data.heartProductList : [],
                    reviewSummary: this.getReviewSummary(data.reviewSummary),
                    categoryDetail: {
                        category: category,
                        categoryLarge: this.getCategory(data.categoryLarge, CATEGORY_DEPTH.Large),
                        categoryMedium: this.getCategory(data.categoryMedium, CATEGORY_DEPTH.Medium, category),
                        categorySmall: this.getCategory(data.categorySmall, CATEGORY_DEPTH.Small, category),
                    },
                    relatedPost: this.getRelatedPost(data.relatedPost),
                    categoryBest: this.getCategoryBest(data.categoryBest, no),
                    brandBest: this.getBrandBest(data.itemDetail.brand_best_product_list),
                    media: data.media ? data.media as Video[] : [],
                    frontBrand: this.getFrontBrand({...data.itemDetail.front_brand}, data.heartBrand),
                    partnerBrand: this.getPartnerBrand(data.itemDetail.partner_brand),
                    gift: this.getGiftImage(data.itemDetail.gift_images),
                    infoForConsumer: (data.itemDetail && data.itemDetail.item_details_list) ? data.itemDetail.item_details_list as InfoForConsumerState[] : [], // 고시정보
                    caution: this.getCaution(data.itemDetail),
                    descriptions: this.getDescription(data.itemDetail),
                    detailContent: this.getDetailContent(data.itemDetail.item_images.filter(content => content.image_type > 3)),
                    modelSize: this.getModelSize(data.itemDetail.item_model_sizes),
                    sizeChart: this.getSizeChart(data.itemDetail.item_size_charts, data.itemDetail.size_chart_type),
                    specialOrder: this.getSpecialOrder(data.itemDetail),
                    relatedProduct: this.getRelatedProduct(data.itemDetail.item_related),
                    coverImageView: this.getCoverImages(data.itemDetail.item_images, data.itemDetail.is_badge),
                    itemSummary: this.getItemSummary(data.itemDetail),
                };
                this.store.setState(stateData);

                observer.next();
                observer.complete();*/
            }, err => observer.error(err));
        });
    }
}
