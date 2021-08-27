import { Card } from '../interface/card';
import { CardPosition } from '../interface/card-position';
import { Prediction } from '../interface/prediction';

export class TheHermit implements Card {
  id: string = 'the-hermit';
  name: string = 'The Hermit';
  acana: string = 'Major';
  index: number = 9;
  description: string = `The Hermit stands alone on the top of a mountain. The snow-capped range symbolises his spiritual mastery, growth and accomplishment. He has chosen this path of self-discovery and, as a result, has reached a heightened state of awareness.
In his right hand, he holds a lantern with a six-pointed star inside; it is the Seal of Solomon, a symbol of wisdom. As the Hermit walks his path, the lamp lights his way – but it only illuminates his next few steps rather than the full journey. He must step forward to see where to go next, knowing that not everything will be revealed at once. In his left hand, the side of the subconscious mind, the Hermit holds a long staff (a sign of his power and authority), which he uses to guide and balance him.`;
  keyword: CardPosition<string> = {
    upright: 'Soul-searching, introspection, being alone, inner guidance',
    reversed: 'Isolation, loneliness, withdrawal',
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
    'https://upload.wikimedia.org/wikipedia/en/4/4d/RWS_Tarot_09_Hermit.jpg';
}
