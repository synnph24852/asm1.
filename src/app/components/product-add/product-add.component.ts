import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService} from 'src/app/services/product.vervice';
import { Validators,FormBuilder,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
constructor(price formBuilder:FormBuilder){

}
productForm = new FormGroup({
  name: new FormControl(''),
  price: new FormControl(0),
})
onHandleSubmit(){
  if(this.productForm.valid){
    console.log(this.productForm);
    
  }
}
}
