
import {map} from 'rxjs/operators';
import {  Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { CartItem } from "../restaurant-detail/shopping-cart/cart-item.model";
import { ShoppingCartService } from "../restaurant-detail/shopping-cart/shopping-cart.service";
import { Order, OrderItem } from "./order.model";
import { LOVEMISK_API } from "app/app.api";



@Injectable()

export class OrderService {

    constructor(private cartService: ShoppingCartService, 
                private http: HttpClient) {}


    itemsValue():number{
        return this.cartService.total()
    }

    cartItems(): CartItem[]{
        return this.cartService.items
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem){
        this.cartService.removeItem(item)
    }

    clear(){
        this.cartService.clear()
    }

    checkOrder(order: Order): Observable<string>{
        return this.http.post<Order>(`${LOVEMISK_API}/orders`, order).pipe(
                        map(order => order.id))
    }
}