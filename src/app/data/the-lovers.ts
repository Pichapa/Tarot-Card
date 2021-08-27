import { Card } from '../interface/card';
import { CardPosition } from '../interface/card-position';
import { Prediction } from '../interface/prediction';

export class TheLovers implements Card {
  id: string = 'the-lovers';
  name: string = 'The Lovers';
  acana: string = 'Major';
  index: number = 6;
  description: string = `The Lovers card shows a naked man and woman standing beneath the angel, Raphael, whose name means ‘God heals’ and represents both physical and emotional healing. The angel blesses the man and woman and reminds them of their union with the Divine.
The couple stands in a beautiful, fertile landscape, reminiscent of the Garden of Eden. Behind the woman stands a tall apple tree, with a snake winding its way up the trunk. The serpent and apple tree represent the temptation of sensual pleasures that may take one’s focus away from the Divine. Behind the man is a tree of flames, which represent passion, the primary concern of the man. The twelve flames suggest the twelve zodiac signs, the symbol of time and eternity. The man looks to the woman, who watches the angel, showing the path of the conscious to the subconscious to the super-conscious, or from physical desire to emotional needs to spiritual concerns.
The volcanic mountain in the background is rather phallic and represents the eruption of passion that happens when man and woman meet in full frontal nudity.`;
  keyword: CardPosition<string> = {
    upright: ' Love, harmony, relationships, values alignment, choices',
    reversed: 'Self-love, disharmony, imbalance, misalignment of values',
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
    'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg';
}
