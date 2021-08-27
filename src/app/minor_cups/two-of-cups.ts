import { Card } from '../interface/card';
import { CardPosition } from '../interface/card-position';
import { Prediction } from '../interface/prediction';

export class TwoOfCups implements Card {
  id: string = 'two-of-cups';
  name: string = 'Two Of Cups';
  acana: string = 'Minor Cups';
  index: number = 2;
  description: string = `The Two of Cups shows a young man and woman, exchanging cups and pledging their love for one another. Above them floats the Caduceus of Hermes – a winged staff with two snakes wrapped around it – the ancient symbol of commerce, trade, and exchange. At the top of the caduceus is a lion’s head, signifying passion and fire energy and suggesting that there may be a lot of fiery, sexual energy between these two people.`;
  keyword: CardPosition<string> = {
    upright: 'Unified love, partnership, mutual attraction',
    reversed: 'Self-love, break-ups, disharmony, distrust.',
  };
  prediction: CardPosition<Prediction> = {
    upright: {
      love: '',
      career: '',
      finances: '',
      health: '',
      spiritwality: '',
    },
    reversed: {
      love: '',
      career: '',
      finances: '',
      health: '',
      spiritwality: '',
    },
  };
  img: string = 'https://upload.wikimedia.org/wikipedia/en/f/f8/Cups02.jpg';
}
