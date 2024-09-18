import { Component, inject } from '@angular/core';
import { PedidoService } from '../pedido-service';
import { Pedido } from '../../pedido';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {
  pedidoService = inject(PedidoService)
  nuevoPedido : Pedido = new Pedido()

  enviarPedido(){
    this,this.nuevoPedido.number = Math.floor(Math.random() * 1000) + 1 
    this.pedidoService.addPedidoAIngresar(this.nuevoPedido)
    this.nuevoPedido = new Pedido()
  }
}
