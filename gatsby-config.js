require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require('path')
const siteConfig = require('./site-config')

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-smoothscroll',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://alicetechnologies.us20.list-manage.com/subscribe/post?u=813c0fbebc074aca422270abb&amp;id=2023cdbcb2',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'alice-site',
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-eslint',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-webpack-size',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/.*\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-104404692-1',
      },
    },
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Montserrat',
            variants: ['400', '600', '700', '800'],
          },
        ],
      },
    },
  ],
}
