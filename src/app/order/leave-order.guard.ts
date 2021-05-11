import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { OrderComponent } from "./order.component";

export class leaveOrderGuard implements CanDeactivate<OrderComponent>{

    constructor(){}

    canDeactivate(orderComponent: OrderComponent, 
                  activatedRoute: ActivatedRouteSnapshot,
                  routerState: RouterStateSnapshot): boolean{
        if (!orderComponent.isOrderCompleted()){
            return window.confirm('Deseja desistir da compra?')
        }  else {
            return true
        }         
    }

}