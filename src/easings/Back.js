const Back = {

  'in': (n, f) => {
    if (!f) f = 2.0;
    return n*n*(n*f + n - f);
  },

  'out': (n, f) => {
    if (!f) f = 2.0;
    return (n-=1)*n*(n*f + n + f) + 1;
  },

};

export default Back;
