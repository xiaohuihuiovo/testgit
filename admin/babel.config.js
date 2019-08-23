  const prodPlugins = []
  if (process.env.NOSE_ENV === 'production') {
    prodPlugins.push('transform-remove-console')
  }
  module.exports = {
    'presets': [
      '@vue/app'
    ],
    'plugins': [
      [
        'component',
        {
          'libraryName': 'element-ui',
          'styleLibraryName': 'theme-chalk'
        }
      ],
      ...prodPlugins,
      "@babel/plugin-syntax-dynamic-import"
    ]
  }