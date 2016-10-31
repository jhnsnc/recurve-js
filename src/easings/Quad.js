const Quad = {

  'in': (n) => {
    return n*n;
  },

  'out': (n) => {
    return ((2-n)*n);
  },

  'inOut': (n) => {
    return ((n*=2) < 1)
      ? n*n*0.5
      : 0.5 * ((2-(n-=1))*n + 1);
  },

};

export default Quad;
