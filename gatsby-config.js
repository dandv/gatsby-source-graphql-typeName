module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'BOGUS',
        fieldName: 'myRemoteGqlSource',
        url: 'https://graphql.cryptoclimate.io',
      },
    },
  ],
};
