export function getDefaultString(val) {
  return val ? val : '';
}

export function getDefaultBoolean(val) {
  return val ? val : false;
}

export function getDefaultDate(val) {
  return val ? Date.parse(val) : Date.now();
}
