import { Card } from '../interface/card';
import { CardPosition } from '../interface/card-position';
import { Prediction } from '../interface/prediction';

export class TheEmpress implements Card {
  id: string = 'the-empress';
  name: string = 'The Empress';
  acana: string = 'Major';
  index: number = 3;
  description: string = `The Empress is a beautiful, full-figured woman with blonde hair and a peaceful aura about her. On her head, she wears a crown of twelve stars, showing her connection with the mystical realm and the cycles of the natural world (the twelve months of the year and the twelve planets). Her robe is patterned with pomegranates, symbolic of fertility, and sits upon a luxurious array of cushions and flowing red velvet. One cushion features the symbol of Venus, the planet of love, creativity, fertility, beauty and grace – the essence of the Empress.

A beautiful, lush forest and winding stream surround the Empress, signifying her connection with Mother Earth and life itself. She draws her sense of peace from the trees and the water and is rejuvenated by the energy of nature. In the foreground, golden wheat springs from the soil, reflecting abundance from a recent harvest.`;
  keyword: CardPosition<string> = {
    upright: 'Femininity, beauty, nature, nurturing, abundance',
    reversed: 'Creative block, dependence on others',
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
  img: string =
    'https://upload.wikimedia.org/wikipedia/en/d/d2/RWS_Tarot_03_Empress.jpg';
}
