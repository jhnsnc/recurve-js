export default {

  'repeat': (n) => n - ~~n,

  'pingpong': (n) => {
    return ~~n%2
      ? 1.0 - n + ~~n
      : n - ~~n;
  },

  'clamp': (n) => {
    return Math.max(0, Math.min(1, n));
  },

};
