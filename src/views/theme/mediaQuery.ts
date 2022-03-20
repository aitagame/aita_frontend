const size: Record<string, number> = {
  tablet: 768,
  desktop: 1024,
};

const device = {
  mobile: `@media (max-width: ${size.tablet - 1}px)`,
  tablet: `@media (min-width: ${size.tablet}px) and (max-width: ${size.desktop - 1}px)`,
  desktop: `@media (min-width: ${size.desktop}px)`,
};

export const mobileDevice = device.mobile;
export const tabletDevice = device.tablet;
export const desktopDevice = device.desktop;
export const landscapeOrientation = `@media (orientation: portrait)`;
