import { Card } from '../interface/card';
import { CardPosition } from '../interface/card-position';
import { Prediction } from '../interface/prediction';

export class TheHierophant implements Card {
  id: string = 'the-hierophant';
  name: string = 'The Hierophant';
  acana: string = 'Major';
  index: number = 5;
  description: string = `The Hierophant is the masculine counterpart to the High Priestess. He is also known as the Pope or the Teacher in other Tarot decks and is ruled by Taurus.

The Hierophant is a religious figure sitting between two pillars of a sacred temple – though this temple differs from the one in which the High Priestess sits. He wears three robes – red, blue and white – and a three-tiered crown, both representing the three worlds over which he rules (the conscious, sub-conscious and super-conscious). In his left hand, he holds the Papal Cross, a triple sceptre that signifies his religious status. He raises his right hand in a religious blessing, with two fingers pointing towards Heaven and two towards Earth.

Before him kneel two followers. The Hierophant’s task is to pass down his spiritual wisdom and initiate the two into the church so they can take up their appointed roles. This imagery speaks to a shared group identity and a rite of passage to enter the next level. The crossed keys at the Hierophant’s feet represent the balance between the conscious and subconscious minds and the unlocking of mysteries, which only he can teach.`;
  keyword: CardPosition<string> = {
    upright:
      'Spiritual wisdom, religious beliefs, conformity, tradition,institutions',
    reversed: 'Personal beliefs, freedom, challenging the status quo',
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
    'https://upload.wikimedia.org/wikipedia/en/8/8d/RWS_Tarot_05_Hierophant.jpg';
}
