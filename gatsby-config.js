const oraseQuery = `
{
  allStrapiOras {
    edges {
      node {
        id
        nume
        imagine_oras {
          url
        }        
      }
    }
  }
}
`;

const queries = [
  {
    query: oraseQuery,
    transformer: ({ data }) => data.allStrapiOras.edges.map(({ node }) => node), // optional
    indexName: 'orase', // overrides main index name, optional
    matchFields: ['slug', 'modified'], // Array<String> overrides main match fields, optional
  },
];

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: 'MF4O1MIFAQ',
        apiKey: 'd7ae534a23b47062fb746faefd4b0b28',
        indexName: `orase`,
        queries,
        enablePartialUpdates: true,
        matchFields: ['slug', 'modified'],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.BE_STRAPI,
        contentTypes: [
            `article`,
            `user`,
            `hero-slides`,
            `what-we-got-items`,
            `testimonial-items`,
            `contact-details`,
            `oras`,
            `restaurants`,
            `foods`,
            `transport-privats`
        ],
        singleTypes: [`section-title`, `about-us`, `separator`, `testimonials`, `ultimele-noutati`],
        queryLimit: 1000,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
