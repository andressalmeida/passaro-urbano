import { Component } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent {

  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string = ''


  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento
  }

}
