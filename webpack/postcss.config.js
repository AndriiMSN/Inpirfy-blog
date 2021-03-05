const sortCSSmq = require('sort-css-media-queries');

module.exports = {
  plugins: [

    require('autoprefixer')({
      grid: true,
    }),

    require('postcss-sort-media-queries')({
      sort: sortCSSmq,
    }),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),

  ],
};


