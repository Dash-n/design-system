export const getVariant = (styles: any, variant: string) => {
    return styles[variant] || '';
  };

export const capitalize = (label: string) => {
    return label.substring(0, 1).toUpperCase() + label.substring(1)
}