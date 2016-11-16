const Back = {

  'in': (n, f) => {
    if (!f) f = 1.70158;
    return n*n*(n*f + n - f);
  },

  'out': (n, f) => {
    if (!f) f = 1.70158;
    return (n-=1)*n*(n*f + n + f) + 1;
  },

  'inOut': (n, f) => {
    if (!f) f = 1.70158;
    return ((n*=2) < 1)
      ? 0.5*n*n*(n*f + n - f)
      : 0.5*(n-=2)*n*(n*f + n + f) + 1;
  },

};

export default Back;
