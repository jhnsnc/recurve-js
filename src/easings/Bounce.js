// uses pre-calculated values (3 bounces, 0.25 rebound) to improve performance slightly
const bounce4x = (n) => {
  if (n < 0.36363636) { // (-1.0/2.75) to (1.0/2.75), centered on (0.0/2.75)
    return 7.5625*n*n;
  } else if (n < 0.72727273) { // (1.0/2.75) to (2.0/2.75), centered on (1.5/2.75)
    return 7.5625*(n-=0.545455)*n + 0.75;
  } else if (n < 0.90909091) { // (2.0/2.75) to (2.5/2.75), centered on (2.25/2.75)
    return 7.5625*(n-=0.818182)*n + 0.9375;
  } else { // (2.5/2.75) to (2.75/2.75), centered on (2.625/2.75)
    return 7.5625*(n-=0.954545)*n + 0.984375;
  }
};

const Bounce = {

  'in': (n) => {
    return 1 - bounce4x(1-n);
  },

  'out': (n) => {
    return bounce4x(n);
  },

  'inOut': (n) => {
    return (n < 0.5)
      ? 0.5 - 0.5 * bounce4x(1-(n*2))
      : 0.5 * bounce4x((n*2)-1) + 0.5;
  },

};

export default Bounce;
