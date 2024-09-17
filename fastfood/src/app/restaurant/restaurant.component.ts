import { Component, inject } from '@angular/core';
import { PedidoService } from '../pedido-service';
import { Pedido } from '../../pedido';
import { DeliveryPointComponent } from "../delivery-point/delivery-point.component";
import { PosComponent } from "../pos/pos.component";
import { KitchenComponent } from "../kitchen/kitchen.component";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [DeliveryPointComponent, PosComponent, KitchenComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  pedidoService = inject(PedidoService)
  pedidosIngresados : Pedido[] = this.pedidoService.getPedidosIngresados()
}
