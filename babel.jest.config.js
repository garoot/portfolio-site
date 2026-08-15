// Jest-only Babel config.
//
// This deliberately does NOT live at `babel.config.js`: Next.js auto-detects a
// root Babel config and disables SWC, which in turn disables `next/font`.
// Keeping it here lets Next compile with SWC while babel-jest still works.
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};
