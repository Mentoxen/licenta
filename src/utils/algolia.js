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

const queries = [
  {
    query: mdxQuery,
    indexName: 'Orase'
  }
]

module.exports = queries