import '@testing-library/jest-dom';

// jsdom implements neither of these, and the redesign uses both:
// IntersectionObserver for nav section tracking, matchMedia for
// prefers-reduced-motion. Without them any render() throws.

if (typeof window !== 'undefined') {
  if (!window.IntersectionObserver) {
    window.IntersectionObserver = class {
      observe() {}

      unobserve() {}

      disconnect() {}

      takeRecords() {
        return [];
      }
    };
    global.IntersectionObserver = window.IntersectionObserver;
  }

  if (!window.matchMedia) {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener() {},
      removeListener() {},
      addEventListener() {},
      removeEventListener() {},
      dispatchEvent() {
        return false;
      },
    });
  }
}
