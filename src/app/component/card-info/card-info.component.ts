import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/interface/card';
import { CardServiceService } from 'src/app/services/card-service.service';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {
  cardInfo!: Card;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardServiceService
  ) {}

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id')!;
    // this.cardService.get(id).subscribe((card: Card) => {
    //   this.cardInfo = card;
    // });
    // this.cardService.getCups(id).subscribe((card: Card) => {
    //   this.cardInfo = card;
    // });
  }
}
