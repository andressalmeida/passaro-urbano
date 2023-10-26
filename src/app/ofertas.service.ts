import { Injectable } from '@angular/core';
import { OfertaI } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class OfertasService {

  constructor(private http: HttpClient) { }

  private url: string = "https://api-passaro-urbano.onrender.com"


  public async getOfertas(): Promise<OfertaI[]> {
    const res = await this.http.get(`${this.url}/ofertas`)
      .toPromise()
      .then((response: any) => response)

    return res

  }

  public async getOfertasPorCateoria(categoria: string): Promise<OfertaI[]> {
    const res = await this.http.get(`${this.url}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((response: any) => response)

    return res
  }

  public async getOfertaPorId(id: number): Promise<OfertaI> {
    const res = await this.http.get(`${this.url}/ofertas/${id}`)
      .toPromise()
      .then((response: any) => response)

    return res
  }

  public getComoUsarPorId(id: number): Promise<string> {
    return this.http.get(`${this.url}/como-usar/${id}`)
    .toPromise()
      .then((response: any) => response.descricao)
  }

  public getOndeFicaPorId(id: number): Promise<string> {
    return this.http.get(`${this.url}/onde-fica/${id}`)
    .toPromise()
    .then((response: any) => response.descricao)
  }



  public pesquisaOfertas(input: string): Observable<OfertaI[]> {
    return this.http.get(`${this.url}/ofertas?descricao_oferta_like=${input}`).pipe(
      retry(10),
      map((response: any) => response)
    )
  }

}
