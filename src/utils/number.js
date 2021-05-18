const getMinMidMax = (arr) => {
  if (arr.length === 0) {
    return [0, 0, 0];
  }
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let num of arr) {
    if (num < min) {
      min = num
    }
    if (num > max) {
      max = num
    }
    sum += num
  }
  return [min, sum / arr.length, max];
}

const toVND = (number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(number ?? 0);
}

export {
  getMinMidMax,
  toVND
}