import { Injectable } from '@angular/core';
import {Product} from 'src/app/models/product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[]= [
    new Product(1,'Outfit 1','You got it',700,'https://i.pinimg.com/236x/20/5b/96/205b962ddd3455108a08b53576882255.jpg'),
    new Product(2,'Outfit 2','Stay warm',200,'https://i.pinimg.com/236x/e9/8a/7a/e98a7a271524c2a49cc5cb57b90a0922.jpg'),
    new Product(3,'Outfit 3','Office ready',300,'https://i.pinimg.com/236x/d7/54/17/d75417b38b676d1a54aec7f5d76921ba.jpg'),
    new Product(4,'Outfit 4','Summer breeze',500,'https://i.pinimg.com/236x/dc/f1/0b/dcf10b1fa82fb9e1150221aafc29f94e.jpg'),
    new Product(5,'Outfit 5','Nice Casual',700,'https://i.pinimg.com/236x/e8/37/b4/e837b4b0073c36c6a8dbd48fc6025ba2.jpg'),
    new Product(6,'Outfit 6','Elegent',100,'https://i.pinimg.com/236x/b3/1c/19/b31c194154df8a63e2203d78b38b1398.jpg'),
    new Product(7,'Outfit 7','Floral',100,'https://i.pinimg.com/236x/8f/3f/5c/8f3f5cdbdc1ee35eeca72964801156d5.jpg'),
    new Product(8,'Outfit 8','Feel Causey',900,'https://i.pinimg.com/236x/66/52/06/665206be428375b9e65bd962555cd3c0.jpg'),
    new Product(9,'Outfit 9','Fashion king',700,'https://i.pinimg.com/236x/1f/ef/39/1fef3912b5fc131568bf552c6e4945c6.jpg'),
    new Product(10,'Outfit 10','Enjoy the sun',100,'https://i.pinimg.com/236x/37/ac/ac/37acac4f227f6504b34f4e5988acfbcd.jpg'),
    new Product(11,'Outfit 11','On point',100,'https://i.pinimg.com/236x/8d/25/39/8d2539eaa3a1771ca5b683077be777a3.jpg'),
    new Product(12,'Outfit 12','All-day-long',700,'https://i.pinimg.com/236x/a7/69/e5/a769e5ff35f1c91641ad0aad633072ad.jpg')
    
  ]

  constructor() { }
  getProducts():Product[]{
    return this.products
  }
}
