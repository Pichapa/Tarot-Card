import { Card } from '../interface/card';
import { CardPosition } from '../interface/card-position';
import { Prediction } from '../interface/prediction';

export class TheHighPriestess implements Card {
  id: string = 'the-high-priestess';
  name: string = 'The High Priestess';
  acana: string = 'Major';
  index: number = 2;
  description: string = `The High Priestess sits in front of a thin veil decorated with pomegranates. The veil represents the separate conscious and subconscious realms, the seen and the unseen, and serves to keep casual onlookers out. Only the initiated may enter. The pomegranates on the veil are a symbol of abundance, fertility and the divine feminine, and are sacred to Persephone who ate a pomegranate seed in the underworld and was forced to return every year.
On either side of the High Priestess stand two pillars, marking the entrance to this sacred, mystical temple (also associated with the Temple of Solomon). One pillar is black with the letter B (Boaz, meaning ‘in his strength’) and the other is white with the letter J (Jachin, meaning ‘he will establish’). The black and white colours of the pillars symbolise duality – masculine and feminine, darkness and light – stating that knowledge and acceptance of duality are required to enter this sacred space.
The High Priestess wears a blue robe with a cross on her chest and a horned diadem (or crown), both a symbol of her divine knowledge and her status as a divine ruler. In her lap, she holds a scroll with the letter TORA, signifying the Greater Law (according to A. E. Waite). It is partly covered, signifying that this sacred knowledge is both explicit and implicit, it will only be revealed when the student is ready to look beyond the material realm. The crescent moon at her feet symbolises her connection with the divine feminine, her intuition and subconscious mind, and the natural cycles of the moon.`;
  keyword: CardPosition<string> = {
    upright:
      'Intuition, sacred knowledge, divine feminine, the subconscious mind',
    reversed: 'Secrets, disconnected from intuition, withdrawal and silence',
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
    'https://upload.wikimedia.org/wikipedia/en/8/88/RWS_Tarot_02_High_Priestess.jpg';
}
