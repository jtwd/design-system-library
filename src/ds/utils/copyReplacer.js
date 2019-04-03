const copyReplacer = (copyText, changesObj) => {
  const keys = Object.keys(changesObj).map(key => `\\[${key}\\]`);
  const pattern = keys.join('|');
  const regex = RegExp(pattern, 'gi');

  return copyText.replace(regex, val => changesObj[val.slice(1, val.length - 1)]);
}

export default copyReplacer