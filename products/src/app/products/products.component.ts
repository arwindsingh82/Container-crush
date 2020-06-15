import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from './product';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit, OnDestroy {

  selection = new SelectionModel<Product>(true, []);
  dataSource = new MatTableDataSource<Product>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  loading = true;
  subscriptions = [];
  displayedColumns = ['imgUrl', 'description', 'longDescription', 'skuAttributeValue1', 'skuAttributeValue2','action'];
  products : Product[] = [];
  productList = [];
  obj:any;
  imageList = [];
  imageObj:any;
  itemNo:any;
allCatList:any;
counter: number = 0;





constructor(private http: HttpClient,
  private productService: ProductService
  ) { 

  }

ngOnInit() {
  this.dataSource.paginator = this.paginator;
  this.subscriptions.push
(this.productService.getProduct()
    .subscribe(products => this.onDataLoad(products)));
}

ngOnDestroy() {
this.subscriptions.forEach(s => s.unsubscribe());
  }

  onDataLoad(products){
this.loading = false;
this.dataSource.data = products;
  }

    detail(v){     
      console.log(v);
      this.itemNo = v;
      $('#showModal').click();   
      let data = this.http.get("http://cumulus-services-v1-cumulus.inmbzp8022.in.dst.ibm.com/products/getproductdetails?itemNumber="+v);
      data.subscribe((response) => {
        this.obj = response;
        console.log(this.obj);
        this.productList.push(this.obj);
        //this.images(v);
      });
      this.productList = [];
  }

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

clickCount(item){
  console.log(item);
  $("#btn"+item).attr("disabled", true);
  this.counter++;
}

showCart(){
  console.log(this.counter);
  alert("Total number of item in cart : " + this.counter);
}

}
