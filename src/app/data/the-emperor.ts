import { Card } from '../interface/card';
import { CardPosition } from '../interface/card-position';
import { Prediction } from '../interface/prediction';

export class TheEmperor implements Card {
  id: string = 'the-emperor';
  name: string = 'The Emperor';
  acana: string = 'Major';
  index: number = 4;
  description: string = `If the Empress is the Mother archetype of the Tarot deck, the Emperor is the Father. He sits upon a large stone throne, adorned with four rams’ heads (symbolic of his connection with Aries and the planet Mars). In his right hand, the Emperor holds an ankh, the Egyptian symbol of life, and in his left is an orb representing the world over which he rules.

He wears a red robe, indicative of his power, passion and energy for life. Underneath it, he wears a suit of armour, suggesting that he is protected from any threat (and any emotional response or vulnerability). His long white beard is symbolic of his age-old wisdom and experience, and along with his gold crown, he is an authority figure who demands to be heard.

Behind his throne looms a tall, impenetrable mountain range, signifying that he is backed by a solid foundation but resistant to making any changes unless he deems it necessary. Beneath the peaks flows a small river, giving some hope that despite his tough exterior, he is still an emotional being – it will just take a lot of digging and trust to open him up to his softer side.`;
  keyword: CardPosition<string> = {
    upright: 'Authority, establishment, structure, a father figure',
    reversed:
      'Domination, excessive control, lack of discipline, inflexibility',
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
    'https://upload.wikimedia.org/wikipedia/en/c/c3/RWS_Tarot_04_Emperor.jpg';
}
