import { constant, maxValue, minValue, inverse, Linear } from './misc';

import Quad from './Quad';
import Cubic from './Cubic';
import Quart from './Quart';
import Quint from './Quint';

import Sine from './Sine';
import Back from './Back';

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
  'Back': Back,
};
