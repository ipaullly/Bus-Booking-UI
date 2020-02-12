const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#f48549',
      '@link-color': '#e6a07c',
      '@font-size-base': '18px'
    }
  })
);