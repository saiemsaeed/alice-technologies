const path = require('path')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
const fp = require('lodash/fp')
const { createFilePath } = require('gatsby-source-filesystem')

const createUrl = fp.flow(
	createFilePath,
	fp.replace(/(^\/|\/$)/g, ''),
	string => `/${string}/`.replace(/\/+/, '/')
)

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
	if (node.internal.type !== 'MarkdownRemark') return
	createNodeField({ name: 'slug', node, value: createUrl({ node, getNode }) })
}

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [
        new DirectoryNamedWebpackPlugin({
          exclude: /node_modules/,
        }),
      ],
    },
  })
}
