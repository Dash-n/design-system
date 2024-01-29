export const toTitlecase = (label: string) => {
  return label.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
  //   return label.substring(0, 1).toUpperCase() + label.substring(1);
};
