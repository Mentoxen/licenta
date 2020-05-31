const mdxQuery = ` {
  allStrapiOras {
    edges {
      node {
        nume
      }
    }
  }
}
`

const unnestFrontmatter = node => {
  const { nume, ...rest } = node
  console.log("iiiiin", ...nume)
  return {
    ...nume,
    ...rest
  }
}

const queries = [
  {
    query: mdxQuery,
    // transformer: ({ data }) =>
    //   data.allStrapiOras.edges.map(edge => edge.node).map(unnestFrontmatter),
    indexName: 'Orase'
  }
]

module.exports = queries