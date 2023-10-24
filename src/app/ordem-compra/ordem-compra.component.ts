import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import {NgForm} from '@angular/forms';
import { Pedido } from '../shared/pedido.model'
import { CarrinhoService } from '../carrinho.service';
import { ItemCarrinho } from '../shared/item-carrinho.model';

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
  public itensCarrinho: ItemCarrinho[] = []
 

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
    ) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens()
  }

  public confirmaCompra(): void {
   let pedido: Pedido = new Pedido(
      this.form?.value.endereco,
      this.form?.value.numero,
      this.form?.value.complemento,
      this.form?.value.formaPagamento,
      this.carrinhoService.exibirItens()
    )

   this.ordemCompraService.efetivaCompra(pedido)
   .subscribe((idPedido: number) => {
    this.idPedidoCompra = idPedido
    this.carrinhoService.limparCarrinho()
   })
  }

  public retornaTotalCarrinho(): number { 
    return this.carrinhoService.totalCarrinho()
  }

  public adicionar(item: ItemCarrinho): void {
    this.carrinhoService.adicionarQuantidade(item)
  }

  public remover(item: ItemCarrinho): void {
    this.carrinhoService.removerQuantidade(item)
  }
}
