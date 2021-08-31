import { gql } from "@apollo/client";

export const get_homepage_acf = gql`
query MyQuery {
    pages(where: {id: 184}) {
      edges {
        node {
          homepageFields {
            fieldGroupName
            homepageBlogSectionNote
            homepageBlogSectionTitle
            homepageBlogSectionSubTitle
          }
        }
      }
    }
  }

`;
console.warn(pages);
export const get_homepage_acf = gql`
`;
