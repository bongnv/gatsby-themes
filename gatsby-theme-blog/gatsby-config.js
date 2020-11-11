module.exports = {
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve("./src/components/page-layout.tsx"),
          posts: require.resolve("./src/components/post-layout.tsx"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 650,
              withWebp: true,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "src/posts",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "src/pages",
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: "src/posts",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
};
