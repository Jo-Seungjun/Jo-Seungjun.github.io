import { graphql } from "gatsby"
import PageComponent from "../src/components/page"

export default PageComponent

export const query = graphql`
  query($slug: String!) {
    page(slug: { eq: $slug }) {
      title
      slug
      excerpt
      body
    }
  }
`