import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Card } from '../interface/card';

@Injectable({
  providedIn: 'root',
})
export class CardServiceService {
  url = 'api/cards';
  urlCups = 'api/minor_cups';
  tarotCard!: Card[]

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    const tarotCard = of(new Observable<Card[]>).pipe(
      filter(data=> data.acana == "Major"));
    tarotCard.subscribe(listMajor=>this.httpClient.get<Card[]>(this.url),
          listCups=>this.httpClient.get<Card[]>(this.urlCups));
  }


  // public list(): Observable<Card[]> {
  //   return this.httpClient.get<Card[]>('api/cards');
  // }

  // public listCups(): Observable<Card[]> {
  //   return this.httpClient.get<Card[]>('api/minor_cups');
  // }

  // public get(id: string): Observable<Card> {
  //   return this.httpClient.get<Card>(`api/cards/${id}`);
  // }

  // public getCups(id: string): Observable<Card> {
  //   return this.httpClient.get<Card>(`api/minor_cups/${id}`);
  // }
  
}