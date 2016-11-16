const Bounce = {

  'in': (n, f) => { //TODO
    if (!f) f = 7.5625;
    return n;
  },

  'out': (n, f) => { //TODO
    if (!f) f = 7.5625;
    return n;
  },

  'inOut': (n, f) => { //TODO
    if (!f) f = 7.5625;
    return ((n*=2) < 1)
      ? n*0.5
      : 0.5 * (n-=1) + 0.5;
  },

};

export default Bounce;
