const Expo = {

  'in': (n, f) => {
    if (!f) f = 2;
    return n == 0.0
      ? 0.0
      : Math.pow(f, 10 * (n - 1));
  },

  'out': (n, f) => {
    if (!f) f = 2;
    return n == 1.0
      ? 1.0
      : -Math.pow(f, -10 * n) + 1;
  },

  'inOut': (n, f) => {
    if (!f) f = 2;
    if ((n*=2) < 1) {
      return n == 0.0
        ? 0.0
        : 0.5 * Math.pow(f, 10 * (n - 1));
    } else {
      return n == 2.0
        ? 1.0
        : -0.5 * Math.pow(f, -10 * (n - 1)) + 1;
    }
  },

};

export default Expo;
