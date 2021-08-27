import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Justice } from '../data/justice';
import { TheChariot } from '../data/the-chariot';
import { TheEmperor } from '../data/the-emperor';
import { TheEmpress } from '../data/the-empress';
import { TheFool } from '../data/the-fool';
import { TheHermit } from '../data/the-hermit';
import { TheHierophant } from '../data/the-hierophant';
import { TheHighPriestess } from '../data/the-high-priestess';
import { TheLovers } from '../data/the-lovers';
import { TheMagician } from '../data/the-magician';
import { TheStrength } from '../data/the-strength';
import { WheelOfFortune } from '../data/wheel-of-fortune';
import { Card } from '../interface/card';
import { TheAceOfCups } from '../minor_cups/the-ace-of-cups';
import { TwoOfCups } from '../minor_cups/two-of-cups';

const THE_FOOL = new TheFool();
const THE_MAGICIAN = new TheMagician();
const THE_HIGH_PRIESTESS = new TheHighPriestess();
const THE_EMPRESS = new TheEmpress();
const THE_EMPEROR = new TheEmperor();
const THE_HIEROPHANT = new TheHierophant();
const THE_LOVERS = new TheLovers();
const THE_CHARIOT = new TheChariot();
const THE_STRENGTH = new TheStrength();
const THE_HERMIT = new TheHermit();
const WHEEL_OF_FORTUNE = new WheelOfFortune();
const JUSTICE = new Justice();

const THE_ACE_OF_CUPS = new TheAceOfCups();
const TWO_OF_CUPS = new TwoOfCups();

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const cards: Card[] = [
      THE_FOOL,
      THE_MAGICIAN,
      THE_HIGH_PRIESTESS,
      THE_EMPRESS,
      THE_EMPEROR,
      THE_HIEROPHANT,
      THE_LOVERS,
      THE_CHARIOT,
      THE_STRENGTH,
      THE_HERMIT,
      WHEEL_OF_FORTUNE,
      JUSTICE,
      THE_ACE_OF_CUPS,
      TWO_OF_CUPS,
    ];
    // const minor_cups: Card[] = [THE_ACE_OF_CUPS, TWO_OF_CUPS];
    return { cards };
  }
}
