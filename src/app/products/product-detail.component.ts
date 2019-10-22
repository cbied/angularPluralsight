import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})



export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  imageWidth: number = 50;
  imageMargin: number = 2;

  constructor(private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id'),
       productName = this.route.snapshot.params.productName,
       productCode = this.route.snapshot.params.productCode,
       releaseDate = this.route.snapshot.params.releaseDate,
       description = this.route.snapshot.params.description,
       price = this.route.snapshot.params.price,
       starRating = +this.route.snapshot.params.starRating,
       imageUrl = this.route.snapshot.params.imageUrl;
    
    this.pageTitle += `: ${id}`
    this.product = {
      'productId': id,
      'productName': productName,
      'productCode': productCode,
      'releaseDate': releaseDate,
      'description': description,
      'price': price,
      'starRating': starRating,
      'imageUrl': imageUrl
    }

  }

  onBack(): void {
    this.router.navigate(['/products'])
  }

}
