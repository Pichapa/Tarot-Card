import { CardPosition } from './card-position';
import { Prediction } from './prediction';

export interface Card {
  id: string;
  name: string;
  acana: string;
  index: number;
  description: string;
  keyword: CardPosition<string>;
  prediction: CardPosition<Prediction>;
  img: string;
}
