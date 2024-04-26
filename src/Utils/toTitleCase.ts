export const toTitlecase = (label: string) => {
  if (typeof label === "string") {
    return label
      .replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
      })
      .replace(/_\w/g, function (txt) {
        return " " + txt.substring(1).toUpperCase();
      });
  } else return label;
};
