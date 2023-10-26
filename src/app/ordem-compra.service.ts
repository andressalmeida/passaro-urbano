import { Injectable } from '@angular/core';
import { Pedido } from './shared/pedido.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdemCompraService {

  private url: string = "https://api-passaro-urbano.onrender.com/pedidos"

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public efetivaCompra(pedido: Pedido): Observable<number> {

    return this.http.post(
      this.url, 
      JSON.stringify(pedido),
      this.httpOptions
    ).pipe(
      map((response: any) => response.id)
    )
  }
}
