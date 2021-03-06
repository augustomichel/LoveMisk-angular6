import {NgModule, ModuleWithProviders} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {InputComponent} from './input/input.component'
import {RadioComponent} from './radio/radio.component'
import {RatingComponent} from './rating/rating.component'

import {OrderService} from '../order/order.service'
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import {RestaurantsService} from '../restaurants/restaurants.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

import {NotificationService} from './messages/notification.service'
import { LoginService } from 'app/security/login/login.service'
import { LoggedInGuard } from 'app/security/loggedin.guard'
import { leaveOrderGuard } from 'app/order/leave-order.guard'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from 'app/security/auth.interceptor'

@NgModule({
    declarations:[InputComponent,RadioComponent,RatingComponent, SnackbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent,SnackbarComponent,
            RatingComponent, CommonModule,
            FormsModule, ReactiveFormsModule ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers:[ShoppingCartService, 
                RestaurantsService, 
                OrderService, 
                NotificationService,
                LoggedInGuard,
                leaveOrderGuard,
                {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true} ,
                LoginService]
    }
  }
}
