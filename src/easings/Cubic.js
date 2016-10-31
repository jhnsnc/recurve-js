const Cubic = {

  'in': (n) => {
    return n*n*n;
  },

  'out': (n) => {
    return ((n-=1)*n*n) + 1;
  },

  'inOut': (n) => {
    return ((n*=2) < 1)
      ? n*n*n*0.5
      : 0.5 * ((n-=2)*n*n + 2);
  },

};

export default Cubic;
