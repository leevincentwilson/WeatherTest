const eslint = require('ss-clean-lint');
eslint.rules = {
  ...eslint.rules,
  'react/destructuring-assignment': 0,
  'react/forbid-prop-types': 0,
};
module.exports = eslint;
