/**
 * Looks for a global browser api, first checking the chrome namespace and then
 * checking the browser namespace. If no appropriate namespace is present, this
 * function will throw an error.
 */
export function getBrowserAPI() {
  let api;

  try {
    // eslint-disable-next-line no-undef
    api = self.browser || self.chrome || browser; // This fixes a bug in pre-chrome Edge
    // todo: note that this was tested in the following edge:
    // Microsoft Edge 44.18362.449.0
    // Microsoft EdgeHTML 18.18362
  } catch (error) {
    // eslint-disable-next-line no-undef
    api = browser;
  }

  if (!api) {
    throw new Error("Browser API is not present");
  }

  return api;
}
