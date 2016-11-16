const Circ = {

  'in': (n) => {
    return -1 * (Math.sqrt(1 - n*n) - 1);
  },

  'out': (n) => {
    return Math.sqrt(1 - (n-=1)*n);
  },

  'inOut': (n) => {
    return ((n*=2) < 1)
      ? -0.5 * (Math.sqrt(1 - n*n) - 1)
      : 0.5 * Math.sqrt(1 - (n-=2)*n) + 0.5;
  },

};

export default Circ;
