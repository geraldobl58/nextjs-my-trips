import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query getPages {
    pages {
      head
      slug
      body {
        html
      }
    }
  }
`
