import { Card } from '../interface/card';
import { CardPosition } from '../interface/card-position';
import { Prediction } from '../interface/prediction';

export class WheelOfFortune implements Card {
  id: string = 'wheel-of-fortune';
  name: string = 'Wheel Of Fortune';
  acana: string = 'Major';
  index: number = 10;
  description: string = `The Wheel of Fortune card shows a giant wheel, with three figures on the outer edges. Four Hebrew letters – YHVH (Yod Heh Vau Heh), the unpronounceable name of God – are inscribed on the wheel’s face. There are also the letters TORA, thought to be a version of the word Torah, meaning ‘law’, or TAROT, or even ROTA (Latin for ‘wheel’). The middle wheel has the alchemical symbols for mercury, sulphur, water and salt – the building blocks of life and the four elements – and represents formative power.
On the outer circle is a snake, the Egyptian god Typhon (the god of evil), descending on the left side. The snake also represents the life force plunging into the material world. On the right side rises the Anubis, the Egyptian God of the dead who welcomes souls to the underworld. And on top of the wheel sits the Sphinx, representing knowledge and strength.
In the corners of the Wheel of Fortune card are four winged creatures, each associated with the four fixed signs of the Zodiac: the angel is Aquarius, the eagle is Scorpio, the lion is Leo, and the bull is Taurus. Their wings signify stability amidst movement and change, and each holds the Torah, representing wisdom.`;
  keyword: CardPosition<string> = {
    upright: 'Good luck, karma, life cycles, destiny, a turning point',
    reversed: 'Bad luck, resistance to change, breaking cycles',
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
    'https://upload.wikimedia.org/wikipedia/en/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg';
}
