const Quart = {

  'in': (n) => {
    return n*n*n*n;
  },

  'out': (n) => {
    return 1 - ((n-=1)*n*n*n);
  },

  'inOut': (n) => {
    return ((n*=2) < 1)
      ? n*n*n*n*0.5
      : 1 - ((n-=2)*n*n*n * 0.5);
  },

};

export default Quart;
