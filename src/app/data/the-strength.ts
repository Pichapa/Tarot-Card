import { Card } from '../interface/card';
import { CardPosition } from '../interface/card-position';
import { Prediction } from '../interface/prediction';

export class TheStrength implements Card {
  id: string = 'the-strength';
  name: string = 'Strength';
  acana: string = 'Major';
  index: number = 8;
  description: string = `In the Strength Tarot card, a woman gently strokes a lion on its forehead and jaw. Even though it is known for its ferociousness, the woman has tamed this wild beast with her calming, loving energy. The lion is a symbol of raw passions and desires, and in taming him, the woman shows that animal instinct and raw passion can be expressed in positive ways when inner strength and resilience are applied. She doesn’t use force or coercion; she channels her inner strength to subdue and subtly control the lion.
The woman wears a white robe, showing her purity of spirit, and a belt and crown of flowers that represent the fullest, most beautiful expression of nature. Over her head is the symbol of infinity, representing her infinite potential and wisdom.`;
  keyword: CardPosition<string> = {
    upright: 'Strength, courage, persuasion, influence, compassion',
    reversed: 'Inner strength, self-doubt, low energy, raw emotion',
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
    'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg';
}
