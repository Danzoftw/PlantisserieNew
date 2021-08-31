import { gql } from "@apollo/client";

const GET_POST = gql`query{
    post(id: "0") {
        id
        title
        slug
        author {
          node {
            name
          }
        }
        content(format: RAW)
    }
}`;


export default GET_POST;