const _ = require("lodash");
const { resolve } = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

const newPathRegExp = /^(\/novinky\/\d+)-(\d+)-(\d+)-(.*)/;
const toNewsPath = path => path.replace(newPathRegExp, "$1/$2/$3/$4");
const isBlogPost = ({ frontmatter }) => frontmatter.templateKey === "blog-post";

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node }, index) => {
      const id = node.id;
      const path = isBlogPost(node)
        ? toNewsPath(node.fields.slug)
        : node.fields.slug;
      const context = { id, pathSlug: path };

      if (isBlogPost(node)) {
        if (index < posts.length - 1 && isBlogPost(posts[index + 1].node)) {
          context.next = posts[index + 1].node;
          context.next.fields.slug = toNewsPath(posts[index + 1].node.fields.slug);
        }
        if (index > 0 && isBlogPost(posts[index - 1].node)) {
          context.prev = posts[index - 1].node;
          context.prev.fields.slug = toNewsPath(posts[index - 1].node.fields.slug);
        }
      }

      createPage({
        path,
        component: resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.js`
        ),
        context
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
