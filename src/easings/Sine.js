const Sine = {

  'in': (n) => {
    return -Math.cos(n*Math.PI/2) + 1;
  },

  'out': (n) => {
    return Math.sin(n*Math.PI/2);
  },

  'inOut': (n) => {
    return (-Math.cos(n*Math.PI) + 1) / 2;
  },

};

export default Sine;
