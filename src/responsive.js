const sizes = {
  mobileS: "320px",
  mobileL: "480px",
  tabletS: "481px",
  tabletL: "768px",
  smallScreenS: "769px",
  smallScreenL: "1024px",
  largeScreenS: "1025px",
  largeScreenL: "1200px",
  extraLargeScreenS: "1201px",
};

export const devices = {
  none: `(max-width: 319px)`,
  mobile: `(min-width: ${sizes.mobileS}) and (max-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tabletS}) and (max-width: ${sizes.tabletL})`,
  smallScreen: `(min-width: ${sizes.smallScreenS}) and (max-width: ${sizes.smallScreenL})`,
  largeScreen: `(min-width: ${sizes.largeScreenS}) and (max-width: ${sizes.largeScreenL})`,
  extraLargeScreen: `(min-width: ${sizes.extraLargeScreenS})`,
};
