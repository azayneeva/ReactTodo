export const partial = (fn, ...args) => fn.bind(null, ...args);

// below: it takes 2 functions, then arguments:
// const pipeline = pipe(dbl, inc); //=> inc(dbl(2))
// const result = pipeline(2);
const _pipe = (fn1, fn2) => (...args) => fn2(fn1(...args));

export const pipe = (...fns) => fns.reduce(_pipe);
