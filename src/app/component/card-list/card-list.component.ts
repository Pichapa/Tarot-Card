import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interface/card';
import { CardServiceService } from 'src/app/services/card-service.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  cardList!: Card[];
  cardMinorCups!: Card[];
  constructor(private cardService: CardServiceService) {}

  ngOnInit(): void {
    // this.cardService.list().subscribe((cards: Card[]) => {
    //   this.cardList = cards;
    // });
    // this.cardService.listCups().subscribe((minor_cups: Card[]) => {
    //   this.cardMinorCups = minor_cups;
    // });
  }
}
