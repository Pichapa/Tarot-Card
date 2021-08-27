import { Card } from '../interface/card';
import { CardPosition } from '../interface/card-position';
import { Prediction } from '../interface/prediction';

export class TheChariot implements Card {
  id: string = 'the-chariot';
  name: string = 'The Chariot';
  acana: string = 'Major';
  index: number = 7;
  description: string = `The Chariot Tarot card shows a brave warrior standing inside a chariot. He wears armour decorated with crescent moons (representing what is coming into being), a tunic with a square (the strength of will) and other alchemical symbols (spiritual transformation). The laurel and star crown signals victory, success and spiritual evolution. Although he appears to be driving the chariot, the charioteer holds no reins – just a wand like the Magician’s – symbolising that he controls through the strength of his will and mind.
The charioteer stands tall – there’s no sitting down for this guy, as he’s all about taking action and moving forward. Above his head is a canopy of six-pointed stars, suggesting his connection to the celestial world and the Divine will. In front of the vehicle sit a black and a white sphinx, representing duality, positive and negative and, at times, opposing forces. Note how the sphinxes are pulling in opposite directions, but the charioteer uses his willpower and sheer resolve to steer the chariot forward in the direction he wants.
Behind the chariot flows a wide river, symbolic of the need to be ‘in flow’ with the rhythm of life while also charging ahead toward your goals and intentions.`;
  keyword: CardPosition<string> = {
    upright: 'Control, willpower, success, action, determination',
    reversed: 'Self-discipline, opposition, lack of direction',
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
    'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg';
}
