import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
product: IProduct ={
  name:"",
  price:0,
  img:""
};
constructor(private productServices: ProductServices, 
  private route: ActivatedRoute
  ){
    this.route.paramMap.subscribe(params =>{
      const id = params.get('id');
      this.productServices.getProduct(id).subscribe(this.product =>{
        console.log(product)
        this.product = product;
      })
    })
  }
  onHandleEdit(){
    this.productServices.updateProduct(this.product).subscribe(data =>{
      console.log(data)
      
    })
  }
}
