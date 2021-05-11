import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "app/shared/shared.module";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";
import { leaveOrderGuard } from "./leave-order.guard";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { OrderComponent } from "./order.component";

const ROUTES: Routes = [
    {path:'', component: OrderComponent, canDeactivate: [leaveOrderGuard]}
]

@NgModule({
    declarations: [OrderComponent,OrderItemsComponent,DeliveryCostsComponent],
    imports:[SharedModule,RouterModule.forChild(ROUTES)]
})

export class OrderModule{}