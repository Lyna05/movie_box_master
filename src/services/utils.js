export const splitDate = (d) => {
  return d.split('-')[0];
};

export const truncate = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + '...';
  } else {
    return str;
  }
};
