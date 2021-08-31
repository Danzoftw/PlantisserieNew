import { gql } from "@apollo/client";

const GET_POSTS = gql`query{
  postItems: posts(where: {orderby: {order: ASC, field: DATE}},first: 1) {
    edges {
      node {
        excerpt
        id
        slug
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
	}
  multiPostItems: posts(where: {orderby: {order: ASC, field: DATE}},first: 4) {
    edges {
      node {
        excerpt
        id
        slug
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
	}
}`;

export default GET_POSTS;

// export const GET_POST_SLUGS = gql`
//  query GET_POST_SLUGS {
//   posts: posts(last: 1) {
//     nodes {
//       id
//       slug
//     }
//   }
// }`;