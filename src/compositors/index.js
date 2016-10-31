export default {

  'weighted': (funcs, weights) => {
    const l = Math.min(funcs.length, weights.length);
    let i = l;
    let sum = 0;
    while (i--) { sum += weights[i] }
    const total = sum;
    const offsets = [];
    for (i=0,sum=0;i<l;i++) {
      sum += weights[i];
      offsets.push(sum/total);
    }
    return (n) => {
      for (i=0;i<l;i++) {
        if (n <= offsets[i]) {
          const p = i>0 ? offsets[i-1] : 0;
          return funcs[i]((n-p)/(offsets[i]-p));
        }
      }
      return 1; //shouldn't be needed
    }
  },

  'piecewise': (funcs, offsets) => {
    let i;
    const l = Math.min(funcs.length, weights.length);
    return (n) => {
      for (i=0;i<l-1;i++) {
        if (n <= offsets[i]) {
          const p = i>0 ? offsets[i-1] : 0;
          return funcs[i]((n-p)/(offsets[i]-p));
        }
      }
      const p = l>1 ? offsets[l-2] : 0;
      return funcs[l-1]((n-p)/(1-p))
    }
  },

};
