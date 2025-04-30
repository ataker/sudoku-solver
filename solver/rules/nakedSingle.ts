// if only one possibily remains for a square, that is the value

export function nakedSingle(vals:any[]) {
  // find values that are an array of length 1
  const single = vals.filter((val) => {
    return Array.isArray(val) && val.length === 1;
  });
  if (single.length) {
    // always want to change the first one
    const updateIndex = vals.indexOf(single[0]);
    vals[updateIndex] = single[0][0];
    return vals;
  }
  return false;
}