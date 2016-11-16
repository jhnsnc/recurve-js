import { constant, maxValue, minValue, inverse, Linear } from './misc';

import Quad from './Quad';
import Cubic from './Cubic';
import Quart from './Quart';
import Quint from './Quint';

import Sine from './Sine';
import Circ from './Circ';
import Expo from './Expo';

import Back from './Back';
import Elastic from './Elastic';
import Bounce from './Bounce';

export default {
  'constant': constant,
  'maxValue': maxValue,
  'minValue': minValue,
  'inverse': inverse,

  'Linear': Linear,

  'Quad': Quad,
  'Cubic': Cubic,
  'Quart': Quart,
  'Quint': Quint,
  'Strong': Quint,

  'Sine': Sine,
  'Circ': Circ,
  'Expo': Expo,

  'Back': Back,
  'Elastic': Elastic,
  'Bounce': Bounce,
};
