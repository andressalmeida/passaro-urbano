import { Injectable } from '@angular/core';
import { ItemCarrinho } from './shared/item-carrinho.model';
import { OfertaI } from './shared/oferta.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  public itens: ItemCarrinho[] = []

  public exibirItens(): ItemCarrinho[] {
    return this.itens
  }

  public incluirItem(oferta: OfertaI): void {
  let itemCarrinho: ItemCarrinho = new ItemCarrinho(
    oferta.id,
    oferta.imagens[0].url,
    oferta.titulo,
    oferta.descricao_oferta,
    oferta.valor,
    1
  );

let itemJaExisteNoCarrinho = this.itens.find((item) => item.id === itemCarrinho.id)

  if(itemJaExisteNoCarrinho) {
    itemJaExisteNoCarrinho.quantidade += 1
  } else {
    this.itens.push(itemCarrinho)
  }
  }

  public totalCarrinho(): number {
    let total: number = 0

    this.itens.map((item) => total += item.quantidade * item.valor)

    return total
  }

  public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {
    let refItem = this.itens.find((item) => item.id === itemCarrinho.id)

    if(refItem) {
      refItem.quantidade += 1
    
    }
  }

  public removerQuantidade(itemCarrinho: ItemCarrinho): void {
    let refItem = this.itens.find((item) => item.id === itemCarrinho.id)

    if(refItem) {
      refItem.quantidade -= 1

      if(refItem.quantidade === 0) {
        this.itens.splice(this.itens.indexOf(refItem), 1)
      }

    }
  }

  public limparCarrinho(): void {
    this.itens = []
  }

  constructor() { }

  
}
