import { gql } from "@apollo/client";

/**
 * GraphQL categories and products query.
 */
const PRODUCTS_AND_CATEGORIES_QUERY = gql`query {
  heroCarousel: productCategories(where: {slug: "offers"}) {
    nodes {
      id
      children {
        nodes {
          id
          name
          slug
          databaseId
          description
          image {
            id
            sourceUrl
            srcSet
          }
        }
      }
    }
  }
  productCategories {
    nodes {
      id
      name
      slug
      image {
        id
        sourceUrl
        srcSet
      }
    }
  }
  products(first: 8) {
    nodes {
      id
      productId: databaseId
      averageRating
      slug
      description
      productCategories {
        edges {
          node {
            name
          }
        }
      }
      image {
        id
        altText
        sourceUrl
      }
      name
      ... on SimpleProduct {
        price
        regularPrice
        id
      }
      ... on VariableProduct {
        price
        id
        regularPrice
      }
      ... on ExternalProduct {
        price
        id
        externalUrl
        regularPrice
      }
      ... on GroupProduct {
        id
        products {
          nodes {
            ... on SimpleProduct {
              id
              price
              regularPrice
            }
          }
        }
      }
      attributes {
        edges {
          node {
            name
            options
          }
        }
      }
    }
  }
}
`;

export default PRODUCTS_AND_CATEGORIES_QUERY;
