const Elastic = {

  'in': (n) => {
    return n === 0.0
      ? 0.0
      : n === 1.0
        ? 1.0
        : -1 * Math.pow(2,10*(n-=1)) * Math.sin( (n-0.075)*(2*Math.PI)/0.3 );
  },

  'out': (n) => {
    return n === 0.0
      ? 0.0
      : n === 1.0
        ? 1.0
        : Math.pow(2,-10*n) * Math.sin( (n-0.075)*(2*Math.PI)/0.3 ) + 1;
  },

  'inOut': (n) => {
    if (n === 0.0) return 0.0;
    if (n === 1.0) return 1.0;
    n*=2;
    return (n < 1)
      ? -0.5 * Math.pow(2,10*(n-=1)) * Math.sin( (n-0.075)*(2*Math.PI)/0.3 )
      : 0.5 * Math.pow(2,-10*(n-=1)) * Math.sin( (n-0.075)*(2*Math.PI)/0.3 ) + 1;
  },

};

export default Elastic;
