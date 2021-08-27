import { Card } from '../interface/card';
import { CardPosition } from '../interface/card-position';
import { Prediction } from '../interface/prediction';

export class TheAceOfCups implements Card {
  id: string = 'the-ace-of-cups';
  name: string = 'The Ace Of Cups';
  acana: string = 'Minor Cups';
  index: number = 1;
  description: string = `The Ace of Cups shows a chalice overflowing with five streams of water. The cup represents the vessel of your subconscious mind; the five streams are your five senses and the abundant emotion and intuition flowing from within you. The hand holding the cup is sliding out of the clouds, a symbol of your awareness of spiritual energy and influence. Below the hand is a vast sea covered with lotus blossoms, signifying the awakening of the human spirit. A dove descends towards the cup – a symbol of Divine love flowing through the subconscious mind to conscious awareness.`;
  keyword: CardPosition<string> = {
    upright: 'Love, new relationships, compassion, creativity.',
    reversed: 'Self-love, intuition, repressed emotions.',
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
  img: string = 'https://upload.wikimedia.org/wikipedia/en/3/36/Cups01.jpg';
}
