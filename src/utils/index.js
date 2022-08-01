function getDefaultVal(val, field, defaultVal, parser) {
  if (val) {
    if (val[field]) {
      return parser ? parser(val[field]) : val[field];
    }
  }
  return defaultVal;
}

export function getDefaultString(val, field) {
  return getDefaultVal(val, field, "");
}

export function getDefaultBoolean(val, field) {
  return getDefaultVal(val, field, false);
}

export function getDefaultDate(val, field) {
  return getDefaultVal(val, field, Date.now(), Date.parse);
}
