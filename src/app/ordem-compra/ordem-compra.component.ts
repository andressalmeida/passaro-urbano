import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import {NgForm} from '@angular/forms';
import { Pedido } from '../shared/pedido.model'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild(`formulario`)
  public form: NgForm | undefined

  public idPedidoCompra: number | undefined

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  public confirmaCompra(): void {
  /* let pedido: Pedido = new Pedido(
      this.form?.value.endereco,
      this.form?.value.numero,
      this.form?.value.complemento,
      this.form?.value.formaPagamento
    )
  */
   this.ordemCompraService.efetivaCompra(this.form?.value)
   .subscribe((idPedido: number) => {
    this.idPedidoCompra = idPedido
   })
  
  }
}
