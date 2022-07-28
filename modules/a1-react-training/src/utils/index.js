export function getDefaultValue(val) {
  return val ? val : '';
}

export function getDefaultDate(val) {
  return val ? Date.parse(val) : Date.now();
}
