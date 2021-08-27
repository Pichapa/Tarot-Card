import { Card } from '../interface/card';
import { CardPosition } from '../interface/card-position';
import { Prediction } from '../interface/prediction';

export class TheMagician implements Card {
  id: string = 'the-magician';
  name: string = 'The Magician';
  acana: string = 'Major';
  index: number = 1;
  description: string = `The Magician card is numbered One – the number of new beginnings and opportunities – and associates with the planet
    of Mercury. He stands with one arm stretched upwards towards the Universe, and the other pointing down to the earth.
    His positioning represents his connection between the spiritual realms and the material realms. The Magician uses
    this relationship to create and manifest his goals in the physical realm. He is the conduit that converts energy
    into matter. The Magician’s robe is white, symbolising purity, and his cloak is red, representing worldly
    experience and knowledge.
    On the table in front of him are the four symbols of the Tarot suits – a cup, pentacle, sword and wand – each
    symbolising one of the four elements – water, earth, air and fire. It is also a sign that he has all the tools
    (and elements) he needs to manifest his intentions into being. Above his head is the infinity symbol, and around
    his waist is a snake biting its own tail – both of which signal that he has access to unlimited potential. And in
    the foreground is an array of foliage and flowers, symbolising the blossoming and fruition of his ideas and
    aspirations.`;
  keyword: CardPosition<string> = {
    upright: 'Manifestation, resourcefulness, power, inspired action',
    reversed: 'Manipulation, poor planning, untapped talents',
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
    'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg';
}
