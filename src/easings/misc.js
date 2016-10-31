export const constant = (n, f) => {
  return typeof f !== 'undefined' ? f : 1.0;
};

export const maxValue = (n) => 1.0;

export const minValue = (n) => 0.0;

export const inverse = (n) => 1 - n;

export const Linear = (n) => n;
