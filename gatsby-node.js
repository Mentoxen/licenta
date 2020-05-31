const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const getArticles = await makeRequest(graphql, `
    {
      allStrapiArticle {
        edges {
          node {
            id
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiArticle.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.id}`,
        component: path.resolve(`src/templates/templateArticle.js`),
        context: {
          id: node.id,
        },
      })
    })
  });

  const getCities = await makeRequest(graphql, `
    {
      allStrapiOras {
        edges {
          node {
            id
            nume
            imagine_oras {
              url
            }
            restaurants {
              id
              nume
            }
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiOras.edges.forEach(({ node }) => {
      createPage({
        path: `orase/${node.id}`,
        component: path.resolve(`src/templates/templateAllCities.js`),
        context: {
          id: node.id,
        },
      })

      node.restaurants.forEach(restaurant => {
        createPage({
          path: `orase/${node.id}/${restaurant.nume}`,
          component: path.resolve(`src/templates/templateRestaurant.js`),
          context: {
            id: restaurant.nume,
          },
        })
      })
    });
  });

  // Query for articles nodes to use in creating pages.
  return {getArticles, getCities};
};