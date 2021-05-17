function group(arr, len) {
  let chunks = [];
  let copy   = Array.from(arr);
  while(copy.length > len) {
    chunks.push(copy.splice(0, len));
  }
  console.log([...chunks, copy])
  return [...chunks, copy];
}

export {
  group
}