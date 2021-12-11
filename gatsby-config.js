module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "sitedata"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "sitedata",
        fieldName: "sitedata",
        url:
          "https://api-sa-east-1.graphcms.com/v2/ckx0z4uaf1erl01xp2ic16ajz/master"
      }
    }
  ]
};
