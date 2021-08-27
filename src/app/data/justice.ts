import { Card } from '../interface/card';
import { CardPosition } from '../interface/card-position';
import { Prediction } from '../interface/prediction';

export class Justice implements Card {
  id: string = 'justice-tarot';
  name: string = 'Justice';
  acana: string = 'Major';
  index: number = 11;
  description: string = `The figure of Justice sits in front of a loosely hung purple veil, signifying compassion, and between two pillars, similar to those framing the High Priestess and the Hierophant, which symbolise balance, law and structure.
She holds a sword in her right hand, showing the logical, well-ordered mindset necessary to dispense fair justice. The sword points upwards – expressing a firm and final decision – and the double-edged blade signifies that our actions always carry consequences. The scales in her left (intuitive) hand, show intuition must balance that logic and are a symbol of her impartiality. Justice wears a crown with a small square on it representing well-ordered thoughts, and a red robe with a green mantle. A little white shoe pops out from beneath her clothing as a reminder of the spiritual consequences of your actions.`;
  keyword: CardPosition<string> = {
    upright: 'Justice, fairness, truth, cause and effect, law',
    reversed: 'Unfairness, lack of accountability, dishonesty',
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
    'https://upload.wikimedia.org/wikipedia/en/e/e0/RWS_Tarot_11_Justice.jpg';
}
