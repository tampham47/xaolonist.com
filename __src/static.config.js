import axios from 'axios';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  getSiteData: () => ({
    lastBuilt: Date.now(),
  }),

  getRoutes: async () => {
    const posts = await axios.get('https://medium.com/@xaolonist/latest?format=json');
    const data = JSON.parse(posts.data.replace('])}while(1);</x>', ''));
    const body = data.payload.references.Post;
    const postList = Object.keys(data.payload.references.Post).map(i => {
      const item = body[i];
      return {
        id: item.id,
        title: item.title,
        desc: item.content.subtitle,
        link: `https://medium.com/@xaolonist/${item.uniqueSlug}`,
        totalClapCount: item.virtuals.totalClapCount,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
      };
    });

    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({ postList }),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },

  webpack: (config, { defaultLoaders, stage }) => {
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use:
              stage === 'dev'
                ? [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
                : ExtractTextPlugin.extract({
                  use: [
                    {
                      loader: 'css-loader',
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: false,
                      },
                    },
                    {
                      loader: 'sass-loader',
                      options: { includePaths: ['src/'] },
                    },
                  ],
                }),
          },
          defaultLoaders.cssLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]
    return config
  },
}
