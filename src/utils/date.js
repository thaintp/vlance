const toString = (date) => {
  return new Date(date).toISOString().slice(0, 10);
}

const timeToDay = (time) => {
  let res = 0;
  if (time.includes("tuần")) {
    res = 7 * parseInt(time.substr(0, time.indexOf(" ")));
  } else {
    res = parseInt(time.substr(0, time.indexOf(" ")));
  }
  return res;
}

export {
  toString,
  timeToDay
}