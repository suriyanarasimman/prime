import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStocks } from '../../../assets/stocks/stocks';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  private _url: string = '/assets/stocks/stocks.json';
  baseurl: string = 'https://ipotrading.herokuapp.com/';
  stockObject: any[] = ['test'];

  constructor(private http: HttpClient) {}

  getStocks(): Observable<IStocks[]> {
    return this.http.get<IStocks[]>(this._url);
  }

  buyStockOrder(buyOrderRequest: any): Observable<any> {
    return this.http.post<any>(this.baseurl + 'bns/buy/', buyOrderRequest);
  }

  sellStockOrder(sellOrderRequest: any): Observable<any> {
    return this.http.post<any>(this.baseurl + 'bns/sell/', sellOrderRequest);
  }
}
