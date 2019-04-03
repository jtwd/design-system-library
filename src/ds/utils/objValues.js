const objValues = obj => {
  const vals = []
  Object.keys(obj).forEach(prop => vals.push(obj[prop]))
  return vals
}

export default objValues
