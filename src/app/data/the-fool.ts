import { Card } from '../interface/card';
import { CardPosition } from '../interface/card-position';
import { Prediction } from '../interface/prediction';

export class TheFool implements Card {
  id: string = 'the-fool';
  name: string = 'The Fool';
  acana: string = 'Major';
  index: number = 0;
  description: string = `The Fool is numbered 0 – the number of unlimited potential – and so does not have a specific place in the sequence of the Tarot cards. The Fool can be placed either at the beginning of the Major Arcana or at the end. The Major Arcana is often considered the Fool’s journey through life and as such, he is ever present and therefore needs no number.
On the Fool Tarot card, a young man stands on the edge of a cliff, without a care in the world, as he sets out on a new adventure. He is gazing upwards toward the sky (and the Universe) and is seemingly unaware that he is about to skip off a precipice into the unknown. Over his shoulder rests a modest knapsack containing everything he needs – which isn’t much (let’s say he’s a minimalist). The white rose in his left hand represents his purity and innocence. And at his feet is a small white dog, representing loyalty and protection, that encourages him to charge forward and learn the lessons he came to learn. The mountains behind the Fool symbolise the challenges yet to come. They are forever present, but the Fool doesn’t care about them right now; he’s more focused on starting his expedition.`;
  keyword: CardPosition<string> = {
    upright: 'Beginnings, innocence, spontaneity, a free spirit',
    reversed: 'Holding back, recklessness, risk-taking',
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
    'https://upload.wikimedia.org/wikipedia/en/9/90/RWS_Tarot_00_Fool.jpg';
}
